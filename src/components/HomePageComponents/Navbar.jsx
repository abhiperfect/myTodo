import React from 'react';
import { IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateTask from '../Buttons/CreateTask';
import SearchAppBar from '../navbarComponents/Searchbar';
import { Margin } from '@mui/icons-material';

// Static styles
const appBarStyles = {
  backgroundColor: "#021526",
  color: "white",
};

const Navbar = ({ handleDrawerToggle, isMobile }) => (
  <AppBar position="static" sx={appBarStyles}>
    <Toolbar>
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
        Task Manager
      </Typography>
      <SearchAppBar />
      <CreateTask hide={true} />
    </Toolbar>
  </AppBar>
);

export default React.memo(Navbar);
