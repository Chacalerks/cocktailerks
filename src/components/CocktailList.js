import React, { useState } from 'react';
import { Autocomplete, TextField, Grid } from '@mui/material';
import useCocktails from '../hooks/useCocktails'; // Import the custom hook
import CocktailCard from './ui/CocktailCard'; // Import the CocktailCard component

const CocktailList = () => {
    const [inputValue, setInputValue] = useState('');
    const cocktails = useCocktails(inputValue);

    return (
        <>
            <Autocomplete
                freeSolo
                options={cocktails}
                getOptionLabel={(option) => option.strDrink}
                renderInput={(params) => <TextField {...params} label="Search Cocktails" variant="standard" />}
                onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
            />
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {cocktails.map((cocktail) => (
                    <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
                        <CocktailCard cocktail={cocktail} />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CocktailList;
