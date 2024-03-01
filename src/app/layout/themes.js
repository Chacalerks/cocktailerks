// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: '# '  // Setting the general background color
        },
        primary: {
            main: '#BD855E',  // Primary color used for buttons, links, etc.
        },
        text: {
            primary: '#000000',  // Main text color
            secondary: '#404040',  // Secondary text color, choose based on your preference for contrast
            white: '#ffffff',  // White text color
        },
    },
    typography: {
        fontFamily: '"Madimi", cursive',
        fontSize: 16,  // Increase the base font size as needed
        h3: {
            fontSize: '6.5rem',  // Example for increasing h1 font size
            fontWeight: 600,  // Example for setting the font weight
        },
        body1: {
            fontSize: '1.2rem',  // Example for increasing body text font size
        }
        // Define other variants as needed...
    },
    shape: {
        borderRadius: 10,  // Aumenta el radio del borde para hacer los botones más redondeados
        padding: 20,  // Aumenta el relleno para hacer los botones más grandes
    },
});

export default theme;
