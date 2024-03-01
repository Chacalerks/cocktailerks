import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

// CocktailDetails component receives the cocktail object as a prop
const CocktailDetails = ({ cocktail }) => {
    return (
        <div class="mb-8">
            <Card sx={{ maxWidth: 345, margin: '0 auto' }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={cocktail.strDrinkThumb} // Use strDrinkThumb for the cocktail image
                    alt={cocktail.strDrink} // Use strDrink for the alt text
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {cocktail.strDrink}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cocktail.strAlcoholic}
                    </Typography>
                </CardContent>
            </Card>
        </div>


    );
};

export default CocktailDetails;
