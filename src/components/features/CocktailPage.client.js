// src/app/CocktailPage.js
import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

// Component to display details of a cocktail based on its ID.
const CocktailPage = ({ cocktailId }) => {
  const [cocktail, setCocktail] = useState(null); // State to hold cocktail details.
  const [loading, setLoading] = useState(true); // State to manage loading state.

  // Fetch cocktail details from the API on component mount or when cocktailId changes.
  useEffect(() => {
    const fetchCocktail = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`);
        const data = await response.json();
        setCocktail(data.drinks[0]); // Update state with cocktail details.
      } catch (error) {
        console.error("Failed to fetch cocktail:", error);
      } finally {
        setLoading(false); // Ensure loading state is updated.
      }
    };

    fetchCocktail();
  }, [cocktailId]);

  // Display loading spinner while fetching data.
  if (loading) return <CircularProgress />;

  // Render cocktail details once data is loaded.
  return (
    <Box>
      <Typography variant="h4">{cocktail?.strDrink}</Typography> // Cocktail name.
      <Box component="img" src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} sx={{ width: '100%', maxWidth: '400px' }} /> // Cocktail image.
      <Typography variant="body1">{cocktail?.strInstructions}</Typography> // Cocktail instructions.
    </Box>
  );
};

export default CocktailPage;
