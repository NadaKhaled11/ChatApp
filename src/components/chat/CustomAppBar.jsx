import React from 'react';
import Box from '@mui/material/Box';

const CustomAppBar = ({ children }) => {
  return (
    <Box
      height="63px"
      sx={{
        background: '#78aaa1',
        padding: '0px 20px',
      }}
    >
      {children}
    </Box>
  );
};

export default CustomAppBar;
