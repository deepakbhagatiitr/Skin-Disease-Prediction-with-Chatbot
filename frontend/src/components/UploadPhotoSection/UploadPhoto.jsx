import React, { useState, useRef } from 'react';
import Cropper from 'react-easy-crop';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomePage/Navbar';

const UploadPhoto = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showViewResult, setShowViewResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [croppedImage, setCroppedImage] = useState(null);
  const [prediction, setPrediction] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setImageSrc(reader.result);
    }
  };

  const createImage = (canvas) => {
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        resolve({ url, blob });
      });
    });
  };

  const generateCroppedImage = async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageSrc;
    await img.decode();

    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;
    ctx.drawImage(
      img,
      croppedAreaPixels.x,
      croppedAreaPixels.y,
      croppedAreaPixels.width,
      croppedAreaPixels.height,
      0,
      0,
      croppedAreaPixels.width,
      croppedAreaPixels.height
    );

    const { url, blob } = await createImage(canvas);
    setCroppedImage(url); 
    return blob; 
  };

  const onSubmitCrop = async () => {
    setLoading(true);
    setShowViewResult(false);
    setProgress(0);
    setErrorMessage('');

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    setTimeout(async () => {
      try {
        const croppedBlob = await generateCroppedImage();
        if (!croppedBlob) {
          setErrorMessage('No image to predict. Please upload and crop an image.');
          return;
        }
        const formData = new FormData();
        formData.append('image', croppedBlob, 'croppedImage.jpg');

        const response = await axios.post('http://127.0.0.1:8000/api/predict/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        setPrediction(response.data.prediction);
        setLoading(false);
        setShowViewResult(true);
      } catch (error) {
        setErrorMessage('Error uploading image. Please try again.');
        console.error('Error:', error);
        setLoading(false);
      }
    }, 3000);
  };

  const onCropComplete = (croppedArea, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  };

  const onViewResult = () => {
    navigate('/result');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900">
      <Navbar />
      {!imageSrc && (
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-semibold text-white mb-4">Upload Photo</h1>
          <p className="text-gray-600 mb-6">
            Select a photo to analyze. You can upload a file from your device.(recommended jpg, jpeg)
          </p>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={onImageUpload}
          />
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-colors"
            onClick={() => fileInputRef.current.click()}
          >
            Upload Photo
          </button>
        </div>
      )}

      {imageSrc && !loading && !showViewResult && (
        <div className="w-full max-w-lg text-center">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Crop the Photo</h1>
          <p className="text-white mb-4">Zoom in and focus on the area of interest.</p>
          <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-sm">
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
              onClick={() => setZoom(zoom - 0.1)}
            >
              Zoom Out
            </button>
            <input
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={zoom}
              onChange={(e) => setZoom(e.target.value)}
              className="mx-4"
            />
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg"
              onClick={() => setZoom(zoom + 0.1)}
            >
              Zoom In
            </button>
          </div>
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-6 hover:bg-blue-700 transition-colors"
            onClick={onSubmitCrop}
          >
            Crop & Predict
          </button>
        </div>
      )}

      {loading && (
        <div className="w-full max-w-lg text-center">
          <h1 className="text-2xl font-semibold text-white mb-4">Processing Photo</h1>
          <div className="w-full bg-gray-300 rounded h-2">
            <div
              className="bg-blue-600 h-2 rounded transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white mt-4">Processing the image, please wait...</p>
        </div>
      )}

      {showViewResult && (
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Results</h1>
          {croppedImage && (
            <div className="mt-4 flex flex-col justify-center items-center">
              {/* <h2 className="text-lg font-medium text-gray-700 mb-2">Image:</h2> */}
              <div className="mt-2">
                <img
                  src={croppedImage}
                  alt="Cropped"
                  className="w-48 rounded-lg shadow-md mx-auto"
                />
              </div>
            </div>
          )}

          {prediction && (
            <div className="mt-4">
              <h2 className="text-lg font-medium text-white mb-2">Predicted Disease:</h2>
              <p className="text-lg text-rose-800 font-semibold">{prediction}</p>
              <button
                className="bg-blue-600 text-white py-2 px-6 rounded-lg mt-6 hover:bg-blue-700 transition-colors"
                onClick={() => navigate(`/chat?disease=${encodeURIComponent(prediction)}`)}
              >
                Learn More
              </button>
            </div>
          )}
        </div>
      )}

      {errorMessage && (
        <p className="text-red-500 mt-4">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default UploadPhoto;
