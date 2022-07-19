import React from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  circle: {},

  progres: {
    width: "20px",
    height: "10px",
    fontWeight: "900",
  },
});

const Progress2 = ({ status }) => {
  const classes = useStyles();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1F9547",
          padding: "4px 10px",
          border: "3px solid #1F9547",
          marginTop: "12px",
          width: "16px",
          height: "26px",
          borderRadius: "9999px",
          textAlign: "center",
        }}
      >
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          1
        </Typography>
      </Box>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>

      <Box
        sx={{
          backgroundColor: "#1F9547",
          padding: "4px 10px",
          border: "3px solid #1F9547",
          marginTop: "12px",
          width: "16px",
          height: "26px",
          borderRadius: "9999px",
          textAlign: "center",
        }}
      >
        <Typography
          color="white"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          2
        </Typography>
      </Box>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "4px 10px",
          border: "3px solid #1F9547",
          marginTop: "12px",
          width: "16px",
          height: "26px",
          borderRadius: "9999px",
          textAlign: "center",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          3
        </Typography>
      </Box>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <p className={classes.progres}>.</p>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "4px 10px",
          border: "3px solid #1F9547",
          marginTop: "12px",
          width: "16px",
          height: "26px",
          borderRadius: "9999px",
          marginRight: "30px",
          textAlign: "center",
        }}
      >
        <Typography
          color="primary"
          sx={{
            fontSize: 13,
            fontWeight: 700,
            paddingTop: "5px",
          }}
        >
          4
        </Typography>
      </Box>
    </>
  );
};

export default Progress2;
