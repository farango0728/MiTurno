import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import imgGrupo from "../../assets/img/Grupo2073.png";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import ModalForm from "./ModalForm";

const useStyles = makeStyles({
  root: {
    padding: "60px 70px 60px 100px",
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

  containerLogo: {
    display: "flex",
    justifyContent: "end",
    marginRight: "50px",
  },
});

const DateResults = () => {
  const classes = useStyles();

  const { selectSede, datos } = useContext(DataContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <div className={classes.root}>
          <Typography
            color="primary"
            sx={{
              fontSize: 23,
              fontWeight: "800",
            }}
          >
            Verifica tu información,
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 23,
              fontWeight: "800",
              marginTop: "30px",
            }}
          >
            {datos.primerNombre} {datos.segundoNombre}
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 23,
              fontWeight: "800",
              marginTop: "15px",
            }}
          >
            {datos.primerApellido} {datos.segundoApellido}
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 18,
              fontWeight: "400",
              marginTop: "15px",
            }}
          >
            {datos.numeroDocumento}
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 23,
              fontWeight: "800",
              marginTop: "25px",
            }}
          >
            Consulta externa
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 23,
              fontWeight: "800",
              marginTop: "25px",
            }}
          >
            {selectSede.name}
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 15,
              fontWeight: "400",
              marginTop: "15px",
            }}
          >
            {selectSede.address}. Lorem Ipsum
          </Typography>
          <Typography
            color="secondary"
            sx={{
              fontSize: 15,
              fontWeight: "400",
              marginTop: "15px",
            }}
          >
            Horario: {selectSede.date}
          </Typography>

          <div className={classes.containerLink}>
            <Link className={classes.link} to="/" underline="none">
              Aceptar
            </Link>
          </div>
        </div>
        <ModalForm />
      </Grid>
      <Grid item xs={7}>
        <img src={imgGrupo} alt="grupo" />
      </Grid>
    </Grid>
  );
};

export default DateResults;
