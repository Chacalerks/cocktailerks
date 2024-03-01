import { useState, useEffect } from 'react';

const useCocktails = (searchQuery, isAlcoholic, isNonAlcoholic) => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        // Function to build the appropriate URL based on the parameters
        const buildUrl = () => {
            let base = 'https://www.thecocktaildb.com/api/json/v1/1/';
            if (searchQuery.length > 2) {
                return `${base}search.php?s=${searchQuery}`;
            } else if (isAlcoholic) {
                return `${base}filter.php?a=Alcoholic`;
            } else if (isNonAlcoholic) {
                return `${base}filter.php?a=Non_Alcoholic`;
            }
            return `${base}search.php?s=`; // Default to an empty search which returns a sample of cocktails
        };

        // Fetch cocktails from the API based on the parameters.
        const fetchCocktails = async () => {
            const url = buildUrl();
            const response = await fetch(url);
            const data = await response.json();
            setCocktails(data.drinks || []);
        };

        fetchCocktails();
    }, [searchQuery, isAlcoholic, isNonAlcoholic]);

    return cocktails;
};

export default useCocktails;
