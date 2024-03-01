import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Grid } from '@mui/material';
import { useRouter } from 'next/router';
import Layout from '../../app/layout/Layout';
import useCocktailInfo from '../../hooks/useCocktailInfo';

const CocktailInfoPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { cocktail } = useCocktailInfo(id);

    // Function to render ingredients and measurements
    const renderIngredients = () => {
        if (!cocktail) return []; // Early return if no cocktail data

        const ingredients = [];
        try {
            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktail[`strIngredient${i}`];
                const measure = cocktail[`strMeasure${i}`];
                if (ingredient) {
                    ingredients.push(
                        <Box key={i} sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', '::before': { content: '"• "', mr: 1 } }}>
                                {measure ? `${measure} of ` : ''}{ingredient}
                            </Typography>
                        </Box>
                    );
                }
            }
        } catch (error) {
            console.error("Error rendering ingredients:", error);
            return [<Typography key="error">Error loading ingredients.</Typography>];
        }
        return ingredients;
    };

    return (
        <Layout>
            <Typography align="center" variant="h4" sx={{ fontFamily: '"Tangerine"', fontWeight: 'bold', fontSize: "3rem", mb: 2 }}>
                Good Option for a Cocktail
            </Typography>
            {cocktail ? (
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <Card raised sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', m: 2 }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: { sm: 250 }, // Adjust width as needed
                                    height: 250, // Adjust height as needed
                                    objectFit: 'cover', // Ensures the image covers the space without distorting aspect ratio
                                }}
                                image={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                            />

                            <CardContent sx={{ flex: '1' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {cocktail.strDrink}
                                </Typography>
                                <Box sx={{ my: 2 }}>
                                    <Typography variant="subtitle1" component="div">
                                        Ingredients:
                                    </Typography>
                                    {renderIngredients()}
                                </Box>
                                <Typography variant="body1" color="text.secondary">
                                    Instructions: {cocktail.strInstructions}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ) : (
                <Typography align="center" variant="subtitle1" sx={{ mt: 5 }}>
                    No cocktail data available. Please try a different cocktail.
                </Typography>
            )}
        </Layout>
    );
};

export default CocktailInfoPage;
