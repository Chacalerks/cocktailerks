import React from 'react';
import { Button } from '@mui/material';

const StyledButton = ({ playGame }) => {
    return (
        <Button
            onClick={playGame}
            sx={{
                // Basic styling
                backgroundColor: '#1976d2', // Example color, choose what fits your design
                color: '#fff',
                padding: '10px 20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#115293', // Darker shade for hover state
                    transform: 'scale(1.05)', // Slightly increase size on hover
                },
                '&:active': {
                    backgroundColor: '#0D3C7C', // Even darker shade for click state
                    transform: 'scale(0.95)', // Slightly decrease size on click
                }
            }}
        >
            Play Game
        </Button>
    );
};

export default StyledButton;
