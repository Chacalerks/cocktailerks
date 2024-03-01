import React, { useState } from 'react';
import '../customStyles.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes'; // import the custom theme
import { Container, Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  // Navigate to the cocktail details page when the card is clicked.
  const handleCardClick = () => {
    router.push(`/`);
  };

  return (
    <>

      <ThemeProvider theme={theme}>



        {/* Header con Imagen de Fondo */}
        <Box className="background-image"
          sx={{
            position: 'relative',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed', // Mantiene la imagen fija al hacer scroll
            height: '70vh', // Altura completa de la pantalla
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
              <Typography
                variant="h3"
                onClick={handleCardClick}
                sx={{
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
                }}
              >
                Cocktailerks Explorer
              </Typography>

              <Typography variant="subtitle1" sx={{ mb: 3 }}>
                Discover the world of cocktails with Cocktailerks Explorer - your guide to the art of mixology.
              </Typography>
            </Box>

          </Box>


        </Box>

        <Container maxWidth="lg" sx={{ display: 'flex', mt: 4 }}>
          <Box flexGrow={1}>{children}</Box>
        </Container>

      </ThemeProvider>




    </>
  );
};

export default Layout;
