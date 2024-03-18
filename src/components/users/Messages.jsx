import React, { useState } from 'react';
import { Avatar, Box, IconButton, Input, Typography,alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoodIcon from '@mui/icons-material/Mood';
import MicIcon from '@mui/icons-material/Mic';
import CustomAppBar from '../chat/CustomAppBar';
import ChatContainer from './ChatContainer';

export default function RightPanel() {
  const globalIconStyle = {
    color: '#8696a1',
    height: '28px',
    width: '28px',
  };

  const [textValue, setTextValue] = useState('');

  return (
    <Box height="100%" width="80%" display="flex" flexDirection="column">
      <CustomAppBar>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box display="flex">
            <Avatar />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              pl="10px"
            >
              <Typography variant="body1" color="white">
                Balram
              </Typography>
              <Typography variant="caption" color="white">
                online
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <IconButton onClick={() => {}}>
              <SearchIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        </Box>
      </CustomAppBar>
      <Box flex={1} minHeight={0} position="relative">
        <ChatContainer />
      </Box>
      <Box
        height="62px"
        alignItems="center"
        display="flex"
        zIndex="1000"
        sx={{
          background: '#78aaa1',
          padding: '0px 15px',
        }}
      >
        <IconButton onClick={() => {}}>
          <MoodIcon sx={globalIconStyle}  style={{color:'white'}}/>
        </IconButton>
        <Box flex={1} pl="5px" pr="5px">
          <Input
            fullWidth
            disableUnderline
            placeholder="Type a message"
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
            sx={{
              height: '42px',
              borderRadius: '6px',
              color: 'black',
              padding: '0px 10px',
              borderRadius: '15px', 
              backgroundColor: alpha('#ffffff', 0.15),
            }}
          />
        </Box>
        <IconButton onClick={() => {}} >
          <MicIcon sx={globalIconStyle}  style={{color:'white'}}/>
        </IconButton>
      </Box>
    </Box>
  );
}

