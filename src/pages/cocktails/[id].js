import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../app/layout/Layout';
import CocktailDetails from '../../components/ui/CocktailDetails';

import CocktailCard from '../../components/ui/CocktailCard';
import IngredientCard from '../../components/ui/IngredientCard';
import AccuracyDialog from '../../components/AccuracyDialog';
import useCocktailInfo from '../../hooks/useCocktailInfo';
import useIngredients from '../../hooks/useIngredients';


import { Button, Grid, Box, Typography, TextField, Container } from '@mui/material';
const CocktailInfoPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { cocktail, ingredients, additionalIngredients } = useCocktailInfo(id);
    const { selectedIngredients, toggleIngredientSelection, checkAccuracy, accuracy, showResult, setShowResult } = useIngredients(ingredients);

    // Combine and shuffle ingredients for display
    const [displayIngredients, setDisplayIngredients] = useState([]);

    useEffect(() => {
        // Combine and shuffle ingredients only when `ingredients` or `additionalIngredients` change
        const shuffledIngredients = [...ingredients, ...additionalIngredients].sort(() => Math.random() - 0.5);
        setDisplayIngredients(shuffledIngredients);
    }, [ingredients, additionalIngredients]); // Dependencies array

    return (
        <Layout>
            <Typography align="center" variant="h4" sx={{ fontFamily: '"Tangerine"', fontWeight: 'bold', fontSize: "3rem", mb: 2 }}>
                Test Your knowledge of a Cocktail
            </Typography>
            <Box sx={{ mb: 5 }}>
                {cocktail && (
                    <CocktailDetails cocktail={cocktail} />
                )}
            </Box>
            <Typography align="center" variant="subtitle1" sx={{ fontSize: "1.2rem", mb: 5 }}>
                In this game, you will be presented with a list of ingredients. Select the ingredients you think are used in the cocktail above. When you are ready, click the button to check your accuracy.
            </Typography>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                {displayIngredients.map((ingredient, index) => {
                    // Determine if the current ingredient is selected

                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}> {/* It's better to use index as the key here since cocktail.idDrink will be the same for all ingredients */}
                            <IngredientCard
                                ingredientObj={{ name: ingredient, isSpecial: additionalIngredients.includes(ingredient) }}
                                toggleSelection={() => toggleIngredientSelection(ingredient)} // Pass isSelected as a prop to IngredientCard
                                selectedIngredients={selectedIngredients} // Pass isSelected as a prop to IngredientCard
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
                <Button variant="contained" sx={{ padding: '0.5rem 3rem', mt: 2 }} onClick={checkAccuracy}>
                    Check My Ingredients
                </Button>
            </Box>



            <AccuracyDialog open={showResult} accuracy={accuracy} onClose={() => setShowResult(false)} />
        </Layout>
    );
};

export default CocktailInfoPage;
