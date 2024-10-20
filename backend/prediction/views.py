# views.py
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.files.storage import default_storage
from .forms import ImageUploadForm
import os
import numpy as np
import tensorflow as tf

MODEL_PATH = os.path.join(os.path.dirname(__file__), 'models/Skin_Diseases_CNN.h5')
model = tf.keras.models.load_model(MODEL_PATH)

class_names = [
    'Acne & Rosacea',
    'Malignant Skin Lesions (Actinic Keratosis, Basal Cell Carcinoma)',
    'Atopic Dermatitis',
    'Bacterial Infections (Cellulitis, Impetigo)',
    'Eczema',
    'Exanthems & Drug-Induced Eruptions',
    'Herpes, HPV & Other STDs',
    'Pigmentation Disorders & Light Diseases',
    'Lupus & Connective Tissue Diseases',
    'Melanoma, Nevi & Moles',
    'Contact Dermatitis (e.g., Poison Ivy)',
    'Psoriasis, Lichen Planus & Related Conditions',
    'Benign Tumors (Seborrheic Keratoses)',
    'Systemic Diseases',
    'Fungal Infections (Tinea, Candidiasis)',
    'Urticaria (Hives)',
    'Vascular Tumors',
    'Vasculitis',
    'Viral Infections (Warts, Molluscum)'
]

@api_view(['POST'])
def predict_skin_disease(request):
    if request.method == 'POST':
        file = request.FILES['image']
        file_name = default_storage.save(file.name, file)
        file_path = default_storage.path(file_name)

        # Preprocess the image and predict
        img = tf.keras.preprocessing.image.load_img(file_path, target_size=(192, 192))
        img_array = tf.keras.preprocessing.image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)

        predictions = model.predict(img_array)
        predicted_class_index = np.argmax(predictions)
        predicted_disease = class_names[predicted_class_index]

        default_storage.delete(file_name)

        return JsonResponse({'prediction': predicted_disease})

