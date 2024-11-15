import React from 'react';
import { CssBaseline, Box, Container } from '@mui/material';

const TaskContainer = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          height: '76vh',
          padding: 1, // Use padding shorthand to make it cleaner
        }}
      >
        <Box
          sx={{
            bgcolor: '#e5e9ed',
            height: '100%',
            overflowY: 'auto',
            padding: 2,
            '&::-webkit-scrollbar': {
              display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
            },
            '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
            'scrollbar-width': 'none',     // Hide scrollbar for Firefox
          }}
        >
          {children}
        </Box>
      </Container>
    </>
  );
};

// Wrap with React.memo and export it
export default React.memo(TaskContainer);
