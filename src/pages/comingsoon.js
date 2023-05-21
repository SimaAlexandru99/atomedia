import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar } from '@mui/material';
import logo from '../assets/logo.png';

const ComingSoonPage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#141414',
      }}
    >
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', marginTop: '50px' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <img src={logo} alt="Logo" style={{ width: '210px', marginRight: '10px' }} />
          <Button color="inherit" sx={{ width: '200px', height: '80px', background: '#292929', fontSize: '20px', fontFamily: 'Rubik, sans-serif' }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign="center">
          <Typography variant="h4" component="h1" gutterBottom sx={{ color: 'white' }}>
            Coming Soon
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: 'white' }}>
            We are working hard to bring you an amazing experience.
            <br />
            Stay tuned!
          </Typography>
          <Button variant="contained" color="primary">
            Get Notified
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ComingSoonPage;
