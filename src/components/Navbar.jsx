import React from 'react';
import { Box, Button, TextField, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = ({ handleDrawerToggle, isMobile }) => (
  <AppBar position="static" sx={{ backgroundColor: "#2c3e50", color: "white" }}>
    <Toolbar>
      {/* Hamburger Menu for Mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      )}
      {/* Logo or Title */}
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Task Management
      </Typography>
      
      {/* Search Field */}
      <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, mr: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            width: "100%",
            maxWidth: 250
          }}
        />
      </Box>

      {/* "+ Create Task" Button */}
      <Button variant="contained" color="primary" sx={{ display: { xs: 'none', sm: 'block' } }}>
        + Create Task
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
