import React from 'react';
import { Box, Button, TextField, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateTask from '../Buttons/CreateTask';
import SearchAppBar from '../navbarComponents/Searchbar';

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
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Tasks
      </Typography>
      
      <SearchAppBar />
      <CreateTask  hide={true}/>
    </Toolbar>
  </AppBar>
);

export default Navbar;
