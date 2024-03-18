import React from 'react';
import Box from '@mui/material/Box';
import OwnMessageCard from '../chat/OwnMessg';
import ReplyMessageCard from '../chat/ReplayMessg';

const ChatContainer = () => {
  return (
    <Box
      sx={{
        height: '100%',
        // width: '100%',
        position: 'absolute',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        padding: '1% 6%',
        gap: '.5rem',
        overflow: 'auto',
      }}
    >
      <OwnMessageCard />
      <ReplyMessageCard />

      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
      <OwnMessageCard />
      <ReplyMessageCard />
    </Box>
  );
};

export default ChatContainer;
