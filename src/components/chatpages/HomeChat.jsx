import { Box } from "@mui/material";
import React from "react";
import UsersChat from '../users/UsersChat';
import RightPanel from "../users/Messages";
export default function Homepage() {
  return (
    <Box display="flex" flexDirection="row" height="100vh">
      <UsersChat />
      <Box
        sx={{
          border: ".05px solid #eee",
        }}
      />
      <RightPanel />
    </Box>
  );
}
