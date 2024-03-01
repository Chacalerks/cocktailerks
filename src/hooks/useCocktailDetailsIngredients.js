import { useState, useEffect } from 'react';

// Custom hook to fetch and manage cocktail details
const useCocktailDetailsIngredients = (id) => {
    const [cocktail, setCocktail] = useState(null);
    const [ingredients, setIngredients] = useState([]);
    const [additionalIngredients, setAdditionalIngredients] = useState([]);

    // Fetch cocktail details and additional ingredients
    useEffect(() => {
        //get cocktail details
        const fetchCocktailDetails = async () => {
            if (id) {
                try {
                    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
                    const data = await response.json();
                    if (data.drinks) {
                        setCocktail(data.drinks[0]);
                        extractIngredients(data.drinks[0]);
                    }
                } catch (error) {
                    console.error('Failed to fetch cocktail details:', error);
                }
            }
        };

        // Extract ingredients from cocktail data
        const extractIngredients = (cocktailData) => {
            const fetchedIngredients = [];
            for (let i = 1; i <= 15; i++) {
                const ingredient = cocktailData[`strIngredient${i}`];
                if (ingredient) fetchedIngredients.push(ingredient);
            }
            setIngredients(fetchedIngredients);
            fetchAdditionalIngredients(fetchedIngredients);
        };

        const fetchAdditionalIngredients = async (fetchedIngredients) => {
            // Fetch all ingredients and select 3 random ones that are not already fetched
            try {
                const allIngredientsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
                const allIngredientsData = await allIngredientsResponse.json();
                const allIngredients = allIngredientsData.drinks.map(drink => drink.strIngredient1);
                const filteredIngredients = allIngredients.filter(ingredient => !fetchedIngredients.includes(ingredient));
                const randomIngredients = selectRandomIngredients(filteredIngredients, 3);
                setAdditionalIngredients(randomIngredients);
            } catch (error) {
                console.error('Failed to fetch additional ingredients:', error);
            }
        };

        const selectRandomIngredients = (ingredients, count) => {
            const shuffled = [...ingredients].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        };

        fetchCocktailDetails();
    }, [id]);

    return { cocktail, ingredients, additionalIngredients };
};

export default useCocktailDetailsIngredients;
