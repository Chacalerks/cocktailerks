import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

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
        <>
            <Autocomplete
                freeSolo
                options={cocktails}
                getOptionLabel={(option) => option.strDrink}
                renderInput={(params) => <TextField {...params} label="Search Cocktails" variant="outlined" />}
                onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
                onChange={(_, newValue) => onCocktailSelect(newValue)}
            />
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
                {cocktails.map((cocktail) => (
                    <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {cocktail.strDrink}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {cocktail.strAlcoholic}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default CocktailList;
