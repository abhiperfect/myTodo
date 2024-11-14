import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function TaskContainer({ children }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container 
      maxWidth='lg'
      disableGutters
       sx={{ height: '76vh', 
        padding:'10px'
        }}>
        <Box
          sx={{
            bgcolor: '#e5e9ed',
            height: '100%',
            overflowY: 'auto',
            padding: 2,
            '&::-webkit-scrollbar': {
              display: 'none' // Hide scrollbar for Chrome, Safari, and Opera
            },
            '-ms-overflow-style': 'none',  // Hide scrollbar for IE and Edge
            'scrollbar-width': 'none',     // Hide scrollbar for Firefox
          }}
        >
          {children}
        </Box>
      </Container>
    </React.Fragment>
  );
}
