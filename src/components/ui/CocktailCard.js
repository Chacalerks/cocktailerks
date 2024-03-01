import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import NoDrinksIcon from '@mui/icons-material/NoDrinks';

const CocktailCard = ({ cocktail }) => {
    const router = useRouter();

    // Navigate to the cocktail details page when the card is clicked.
    const handleCardClick = () => {
        router.push(`/cocktails/${cocktail.idDrink}`);
    };

    return (
        <Card
            sx={{
                cursor: 'pointer',
                maxWidth: 345,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out', // Suaviza la transición
                '&:hover': {
                    transform: 'scale(1.03)', // Escala la tarjeta ligeramente en hover
                    boxShadow: '0 6px 12px rgba(0,0,0,0.25)', // Añade sombra para un efecto de elevación
                },
                '&:active': {
                    transform: 'scale(0.98)', // Comprime la tarjeta ligeramente al hacer clic
                }
            }}
            onClick={handleCardClick}
        >
            <CardMedia
                component="img"
                height="300"
                image={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />
            <CardContent>
                {/* Cocktail name in bold */}
                <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: "2rem", fontFamily: '"Tangerine", cursive' }}>
                    {cocktail.strDrink}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, fontFamily: '"Madimi", cursive' }}>
                    Instructions: {cocktail.strInstructions ? cocktail.strInstructions : 'N/A'}
                </Typography>
                {/* Label and icon for alcoholic status */}
                <Box sx={{
                    backgroundColor: '#BD855E',
                    color: '#ffffff',
                    borderRadius: '5px',
                    padding: '2px 15px',
                    mt: 2,
                    width: 'fit-content',
                }}
                >
                    <Typography variant="body2" color="text.white" sx={{ display: 'flex', alignItems: 'center', fontFamily: '"Madimi", cursive' }}>
                        {cocktail.strAlcoholic === 'Alcoholic' ? (
                            <>
                                <LocalBarIcon sx={{ fontSize: 20, mr: 1 }} /> Alcoholic
                            </>
                        ) : (
                            <>
                                <NoDrinksIcon sx={{ fontSize: 20, mr: 1 }} /> Non-Alcoholic
                            </>
                        )}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CocktailCard;
