import { useState, useEffect } from 'react';

const useRandomCocktail = () => {
    const [cocktail, setCocktail] = useState(null);

    useEffect(() => {
        const fetchRandomCocktail = async () => {
            try {
                // Fetch a random alcoholic cocktail
                const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
                const data = await response.json();
                if (data && data.drinks) {
                    // Assuming the API returns an array of drinks, we take the first one
                    const randomCocktail = data.drinks[0];
                    // Check if the cocktail is alcoholic before setting it
                    if (randomCocktail.strAlcoholic === "Alcoholic") {
                        setCocktail(randomCocktail);
                    }
                }
            } catch (error) {
                console.error('Failed to fetch random cocktail:', error);
            }
        };

        fetchRandomCocktail();
    }, []); // Empty dependency array to run only once on component mount

    return cocktail;
};

export default useRandomCocktail;
