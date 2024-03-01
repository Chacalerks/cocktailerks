import { useState, useEffect } from 'react';

const useCocktailInfo = (id) => {
    const [cocktail, setCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log('useCocktailInfo', id);
    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchCocktailDetails = async () => {
            if (!id) {
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                if (data.drinks && data.drinks.length > 0) {
                    const drinkData = data.drinks[0];
                    setCocktail(drinkData);

                    const fetchedIngredients = Object.keys(drinkData)
                        .filter(key => key.startsWith('strIngredient') && drinkData[key])
                        .map(key => drinkData[key]);

                    setIngredients(fetchedIngredients);
                } else {
                    setError('No cocktail found with the provided ID');
                }
            } catch (error) {
                setError(`Failed to fetch cocktail details: ${error.message}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCocktailDetails();
    }, [id]);

    return { cocktail, ingredients, loading, error };
};

export default useCocktailInfo;
