import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const CocktailList = ({ onCocktailSelect }) => {
    const [cocktails, setCocktails] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchCocktails = async () => {
            if (inputValue.length > 2) {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`);
                const data = await response.json();
                setCocktails(data.drinks || []);
            }
        };

        fetchCocktails();
    }, [inputValue]);

    return (
        <Autocomplete
            freeSolo
            options={cocktails}
            getOptionLabel={(option) => option.strDrink}
            renderInput={(params) => <TextField {...params} label="Search Cocktails" variant="outlined" />}
            onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
            onChange={(_, newValue) => onCocktailSelect(newValue)}
        />
    );
};

export default CocktailList;
