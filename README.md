[🎥 **Click here to watch the demo**](https://drive.google.com/file/d/1oOwJCeKk5FWWG3bFXaztnMBPR4a3Hn-m/view?usp=sharing)
# Skin Disease Detection Model

## Overview
This project aims to provide a deep learning model designed to detect various skin diseases from images. By analyzing an image of skin, the model predicts the most likely disease or condition. The model can assist healthcare professionals and researchers in identifying skin disorders, providing a valuable tool for dermatological diagnosis.

## Table of Contents
- [Features](#features)
- [Model Architecture](#model-architecture)
- [Data](#data)
- [Setup and Installation](#setup-and-installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Chatbot](#chatbot)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Additional Information](#additional-information)

## Features
- Predicts multiple skin diseases from image input.
- Utilizes deep learning techniques for accurate disease classification.
- Supports a wide range of common skin conditions such as acne, eczema, psoriasis, and more.
- Includes pre-trained models for easy use, or allows users to retrain with custom datasets.

## Model Architecture
The model is built using a **Convolutional Neural Network (CNN)**, specifically designed for image classification tasks. It has been fine-tuned on a dataset of labeled skin disease images and optimized for both precision and recall.

### Key Points:
- **Layers**: 3 convolution layers and 1 dense layer.
- **Optimizer**: Adamax.
- **Loss Function**: Categorical Crossentropy.

## Data
The model was trained on a dataset containing images of various skin diseases.
- **Source**: The dataset can be downloaded from this [Google Drive link](https://drive.google.com/drive/folders/1o5mSIGbsqg1vW9n7IOtlRk0Yqn0ITgIo?usp=sharing).
- **Preprocessing**: All images were resized to 128x128 pixels, normalized, and augmented using techniques such as rotation and flipping.
  
*Note: Ensure that any images you use comply with privacy and ethical standards for medical data.*

## Setup and Installation

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Run the server:
   ```bash
   python manage.py runserver
   ```
3. Download the model from [Google Drive](https://drive.google.com/drive/folders/1o5mSIGbsqg1vW9n7IOtlRk0Yqn0ITgIo?usp=sharing) and place it in the `prediction/models` folder.

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Chatbot
1. Navigate to the chatbot folder:
   ```bash
   cd chatbot
   ```
2. Install dependencies:
   ```bash
   python -r requirements.txt
   ```
3. Run the bot:
   ```bash
   python app.py
   ```

### Additional Commands (if needed)
- To install additional frontend dependencies:
  ```bash
  npm i react-spinners react-scroll-to-bottom axios react-easy-crop
  ```

## Technologies Used
- **Frontend**: React + Vite, Tailwind CSS, Axios
- **Backend**: Django REST Framework (DRF)
- **Machine Learning**: TensorFlow, Keras
- **Chatbot**: Llama 3

## Requirements
- Python 3
- TensorFlow
- Keras
- OpenCV (for image preprocessing)
- NumPy
- Matplotlib (for visualizing results)

## Additional Information
For any further details or assistance, please refer to the project documentation or raise an issue on the project's GitHub repository.
