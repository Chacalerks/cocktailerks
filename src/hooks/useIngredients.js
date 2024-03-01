import { useState } from 'react';

const useIngredients = (correctIngredients) => {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [accuracy, setAccuracy] = useState(0);

    // Function to toggle the selection status of an ingredient
    const toggleIngredientSelection = (ingredient, isSpecial = false) => {
        setSelectedIngredients((prevSelected) => {
            const foundIndex = prevSelected.findIndex(i => i.name === ingredient);
            if (foundIndex !== -1) {
                // Deselect if already selected
                return prevSelected.filter((i, index) => index !== foundIndex);

            } else {
                // Select if not already selected, and add 'isSpecial' parameter

                return [...prevSelected, { name: ingredient }];
            }



        });
    };


    // Function to calculate the accuracy of the user's selections
    const checkAccuracy = () => {
        let correctSelections = selectedIngredients.filter(ingredientObj => correctIngredients.includes(ingredientObj.name)).length;
        let wrongSelections = selectedIngredients.filter(ingredientObj => !correctIngredients.includes(ingredientObj.name)).length;
        let substractions = correctSelections - wrongSelections;
        const accuracyPercentage = (substractions / correctIngredients.length) * 100;
        setAccuracy(accuracyPercentage);
        setShowResult(true); // Show the result dialog
    };

    return {
        selectedIngredients,
        toggleIngredientSelection,
        checkAccuracy,
        accuracy,
        showResult,
        setShowResult,
    };
};

export default useIngredients;
