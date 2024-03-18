import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const OwnMessageCard = () => {
  return (
    <Paper
      sx={{
        background: '#78aaa1',
        display: "flex",
        alignSelf: "flex-end",
        maxWidth: "60%",
        textAlign: "start",
        padding: ".35rem .8rem",
        flexDirection: "column",
        borderRadius: ".625rem",
        position: "relative",
        "&::after": {
          content: '" "',
          border: "20px solid transparent",
          position: "absolute",
          top: 0,
          right: "-1.25rem",
          borderTopRightRadius: ".5rem",
        },
      }}
    >
      <Typography
        color={'white'}
        sx={{
          fontSize: "1rem",
        }}
      >
        OwnMessage Card Nulla enim ut pari atur magna. OwnMessa geCard Nulla
        enim ut OwnM es sageCard Nulla enim ut pariatur sit consectetur magna.
      </Typography>
      <Typography
        color={"gray"}
        sx={{
          fontSize: ".85rem",
          display: "flex",
          alignSelf: "flex-end",
        }}
      >
        4:59
      </Typography>
    </Paper>
  );
};

export default OwnMessageCard;
