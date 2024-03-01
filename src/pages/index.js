import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button, Box, Typography, Container, Grid, Autocomplete, TextField } from '@mui/material';
import Layout from '../app/layout/Layout';
import theme from '../app/layout/themes';
import useCocktails from '../hooks/useCocktails';
import CocktailCard from '../components/ui/CocktailCard';
import useRandomCocktail from '@/hooks/useRandomCocktail';

import { useRouter } from 'next/router';

const HomePage = () => {

    const [inputValue, setInputValue] = useState('');
    const [tabValue, setTabValue] = useState(0); // State for the active tab
    const cocktails = useCocktails(inputValue);
    const randomCocktail = useRandomCocktail();
    const router = useRouter();

    // Navigate to the cocktail details page when the card is clicked.
    const playGame = () => {
        console.log('playGame', randomCocktail);
        router.push(`/game/${randomCocktail.idDrink}`);
    };



    // Filter cocktails based on the selected tab
    const filteredCocktails = cocktails.filter(cocktail => {
        if (tabValue === 0) return true; // All cocktails
        if (tabValue === 1) return cocktail.strAlcoholic === 'Alcoholic';
        return cocktail.strAlcoholic !== 'Alcoholic'; // Non-Alcoholic cocktails for tabValue === 2
    });

    return (
        <ThemeProvider theme={theme}>



            {/* Header con Imagen de Fondo */}
            <Box className="background-image"
                sx={{
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed', // Mantiene la imagen fija al hacer scroll
                    height: '80vh', // Altura completa de la pantalla
                    display: 'flex', // Usa Flexbox
                    flexDirection: 'column', // Los hijos se alinean en una columna
                    justifyContent: 'center', // Centra los hijos verticalmente
                    alignItems: 'center', // Centra los hijos horizontalmente si es necesario
                }}
            >
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Ajusta la opacidad para controlar el oscurecimiento
                }} />

                {/* No necesitas my: 4 aquí ya que estamos centrando el contenido */}
                <Box className="tittle-container" sx={{ textAlign: 'center', backdropFilter: 'blur(5px)', color: 'white' }}>
                    <Box className="tittle">
                        <Typography variant="h3" sx={{
                            fontFamily: '"Tangerine", cursive',
                            fontWeight: 'bold',
                            cursor: 'pointer', // Cambia el cursor a pointer para indicar que es clickable
                            transition: 'transform 0.4s ease-in-out', // Suaviza la transición de la transformación
                            '&:hover': {
                                transform: 'scale(1.1)', // Aumenta el tamaño ligeramente al pasar el ratón
                                color: '#BD855E', // Cambia el color al hacer hover (opcional)
                            },
                            '&:active': {
                                transform: 'scale(0.9)', // Efecto de "click" comprimiendo ligeramente el título
                            }
                        }}>
                            Cocktailerks Explorer
                        </Typography>
                        <Typography align="center" variant="h4" sx={{ fontFamily: '"Tangerine"', fontWeight: 'bold', fontSize: "3rem" }}>
                            Figure out how well you know about cocktails
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                padding: '0.5rem 3rem',
                                mt: 2,
                                transition: 'all 0.3s ease', // Smooth transition for the hover effect

                                '&:hover': {
                                    backgroundColor: '#BD855E', // Fill the button with color on hover
                                    color: '#fff', // Change text color to white for contrast
                                    transform: 'scale(1.05)', // Slightly increase the button size for emphasis
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow for depth
                                },

                                '&:active': {
                                    transform: 'scale(0.95)', // Slightly decrease the size to simulate a press
                                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Less pronounced shadow for a pressed look
                                }
                            }}
                            onClick={playGame}
                        >
                            Play Game
                        </Button>

                        <Typography variant="subtitle1" sx={{ mb: 3 }}>
                            Discover the world of cocktails with Cocktailerks Explorer - your guide to the art of mixology.
                        </Typography>
                    </Box>
                    <Autocomplete
                        className='search-bar'
                        freeSolo
                        options={cocktails} // Asegúrate de que 'cocktails' esté definido en tu componente
                        getOptionLabel={(option) => option.strDrink} // Asumiendo que tus opciones tienen una propiedad 'strDrink'
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search Cocktails"
                                className='text-field'
                                // customize the input using sx prop
                                sx={{
                                    '.MuiInputBase-root': {
                                        backgroundColor: '#fff',

                                    },
                                    '.MuiInputBase-input': {
                                        color: '#000',

                                    },
                                    '.MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.23)',

                                    }
                                }}
                            />
                        )}
                        onInputChange={(_, newInputValue) => setInputValue(newInputValue)} // Asegúrate de manejar este estado
                    />
                </Box>


            </Box>


            <Container maxWidth="lg" sx={{ display: 'flex', mt: 4 }}>
                <Box flexGrow={1}>
                    <Typography align="center" variant="h4" sx={{ fontFamily: '"Tangerine"', fontWeight: 'bold', fontSize: "3rem" }}>
                        Our Selection
                    </Typography>


                    <Box sx={{ borderRadius: '10px' }}>
                        <Grid container spacing={3} sx={{ marginTop: 5, }}> {/* Radio más sutil para el contenedor del Grid */}
                            {cocktails.map((cocktail) => (
                                <Grid item xs={12} sm={6} md={4} key={cocktail.idDrink}>
                                    <CocktailCard cocktail={cocktail} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>


            </Container>

        </ThemeProvider>

    );
};

export default HomePage;
