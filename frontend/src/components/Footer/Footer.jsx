import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' }, // Stack in column on small screens
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: { xs: 'center', sm: 'left' } // Center text on small screens
            }}
        >
            <Typography variant="body2" sx={{ mb: { xs: 2, sm: 0 } }}>
                © {new Date().getFullYear()} SkinScan. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Link to="/" color="inherit" underline="hover">Home</Link>
                <Link href="#" color="inherit" underline="hover">How it works</Link>
                <Link to="/blog" color="inherit" underline="hover">Blog</Link>
                <Link to="/AboutUs" color="inherit" underline="hover">About</Link>
                
            </Box>
        </Box>
    );
};

export default Footer;