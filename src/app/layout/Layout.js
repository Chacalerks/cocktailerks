// src/app/layout.js
import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, Link } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cocktail Explorer
          </Typography>
          <Link href="/" color="inherit" underline="none">
            Home
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box my={4}>{children}</Box>
      </Container>
      <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }} textAlign="center">
        <Typography variant="subtitle1">
          © 2024 Cocktail Explorer. All rights reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
