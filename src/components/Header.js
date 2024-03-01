import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
    return (
        <Box
            sx={{

                backgroundPosition: 'center'
            }}
        >
            <Box sx={{ textAlign: 'center', my: 4, backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)' }}>
                {/* Your existing header content here */}
                <Typography variant="h4" component="div" sx={{ fontFamily: '"Pacifico", cursive', mb: 2 }}>
                    Your Text Here
                </Typography>
                <Typography variant="h3" component="h1" sx={{ fontFamily: '"Tangerine", cursive', fontWeight: 'bold' }}>
                    Cocktailerks Explorer
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 2 }}>
                    Discover the world of cocktails with Cocktailerks Explorer - your guide to the art of mixology.
                </Typography>
            </Box>
        </Box>
    );
};

export default Header;
