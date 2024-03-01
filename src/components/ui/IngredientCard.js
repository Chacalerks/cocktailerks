import { useEffect, useState } from 'react';
import { Card, CardActionArea, Typography } from '@mui/material';

const IngredientCard = ({ ingredientObj, toggleSelection, selectedIngredients }) => {
    const { name, isSpecial } = ingredientObj;

    let isSelected = selectedIngredients.some(ingredient => ingredient.name === name);

    return (
        <Card
            sx={{
                transition: '0.3s', // Smooth transition for hover and selection effects
                boxShadow: '0 4px 20px rgba(0,0,0,0.25)', // Elevated shadow when selected
                '&:hover': {
                    boxShadow: '0 6px 12px rgba(0,0,0,0.3)', // Deeper shadow on hover
                },
                backgroundColor: isSelected ? 'rgba(189, 133, 94, 0.1)' : '#fff', // Slight tint for selected items, white for non-selected
            }}
            onClick={toggleSelection}
        >
            <CardActionArea>
                <Typography sx={{ padding: 2, textAlign: 'center' }}>
                    {name}
                </Typography>
            </CardActionArea>
        </Card>
    );
};

export default IngredientCard;
