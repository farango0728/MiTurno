import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import SedeSelection from "./SedeSelection";
import { Link } from "react-router-dom";
import Map from "./Map";
import { DataContext } from "../../context/DataContext";

import "../../App.css";

const useStyles = makeStyles({
  root: {
    padding: "40px 20px 40px 40px",
    fontFamily: "Lato",
  },

  containerMain: {
    maxHeight: "500px",
    overflowY: "scroll",
  },

  containerLink: {
    marginTop: "40px",
    display: "flex",
  },

  link: {
    textDecoration: "none",
    width: "250px",
    backgroundColor: "#3F3F41",
    padding: "7px",
    color: "white",
    display: "block",
    textAlign: "center",
    borderRadius: "9999px",
    fontSize: "23px",
  },
});

const SectionOficce = () => {
  const classes = useStyles();

  const { selectSede, setSelectSede } = useContext(DataContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div className={classes.root}>
          <Typography
            color="primary"
            sx={{ fontSize: "23px", fontWeight: "900" }}
          >
            Selecciona la oficina mas cercana
          </Typography>
          <div className={classes.containerMain}>
            <SedeSelection
              selectSede={selectSede}
              setSelectSede={setSelectSede}
            />
          </div>
          <div className={classes.containerLink}>
            <Link className={classes.link} to="/form" underline="none">
              Seleccionar
            </Link>
          </div>
        </div>
      </Grid>

      <Grid item xs={9}>
        <Map selectSede={selectSede} />
      </Grid>
    </Grid>
  );
};

export default SectionOficce;
