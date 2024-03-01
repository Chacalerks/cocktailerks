import React from 'react';
import Layout from '../app/layout/Layout';
import CocktailList from '../components/features/CocktailList';

console.log(CocktailList); // Should not be undefined
const HomePage = () => {
    const handleCocktailSelect = (cocktail) => {
        // Redirect to the cocktail game page or handle the selection
        console.log('Selected Cocktail:', cocktail);
    };

    return (
        <Layout>
            <CocktailList onCocktailSelect={handleCocktailSelect} />
        </Layout>
    );
};

export default HomePage;
