import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer/Footer';


const Blog = () => {
    const class_names = [
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
    return (
        <div style={{ backgroundColor: '#1a1a1a' }} >

            <Navbar />
            <Container  sx={{ paddingTop: '2rem', paddingBottom: '2rem', marginTop: '4rem' }} >
                <Paper elevation={3} sx={{ padding: '2rem' }} style={{ backgroundColor: '#cac682' }}>
                    {/* Blog Title */}
                    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        The Impact of AI on Dermatology
                    </Typography>

                    {/* Blog Post Date */}
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                        October 20, 2024
                    </Typography>

                    {/* Blog Content */}
                    <Typography variant="body1" paragraph style={{ fontSize: '20px' }}>
                        In recent years, artificial intelligence (AI) has made tremendous strides in various fields, and dermatology is no exception.
                        With AI-powered tools, healthcare professionals can now diagnose skin conditions more accurately and rapidly.
                    </Typography>
                    <Typography variant="body1" paragraph style={{ fontSize: '20px' }}>
                        Our AI model, specifically designed for dermatology, has been trained on a diverse set of skin images to identify over
                        19 different skin conditions. From common issues like acne and eczema to more severe conditions like melanoma and other
                        malignant lesions, the model helps in early diagnosis and treatment planning.
                    </Typography>
                    <Typography variant="body1" paragraph style={{ fontSize: '20px' }}>
                        By integrating AI into dermatology, we can democratize access to specialized care, especially in areas where access to
                        dermatologists is limited. AI tools not only enhance diagnostic accuracy but also reduce the time it takes for patients
                        to receive care, which is critical in conditions like skin cancer where early detection is key.
                    </Typography>
                    <Typography variant="body1" paragraph style={{ fontSize: '20px' }}>
                        With further advancements, AI may soon play an even larger role in healthcare, providing even more robust diagnostic
                        and treatment planning tools for both dermatologists and general practitioners alike.
                    </Typography>
                    <Typography variant='body1' style={{ fontSize: '20px' }}>
                    <span className="font-bold  p-1 rounded">
                        Following is the list of diseases which we have trained our model on:
                    </span>
                        <ol className="flex flex-col m-5 ml-14 list-decimal">
                            {class_names.map((name, index) => (
                                <li key={index}>{name}</li>
                            ))}
                        </ol>
                    </Typography>
                </Paper>
            </Container>
                <Footer />

        </div>
    );
};

export default Blog;