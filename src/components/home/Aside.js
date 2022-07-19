import React from "react";
import Grid from "@mui/material/Grid";
import imgGrupo from "../../assets/img/Grupo2073.png";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import LogoText from './LogoText'

const useStyles = makeStyles({
  root: {
    padding: "60px 70px 60px 100px",
  },

  containerCirCle: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
  },

  circle: {
    backgroundColor: "#1F9547",
    marginTop: 20,
    padding: "4px 10px",
    width: 10,
    borderRadius: "9999px",
    marginRight: 20,
  },

  containerLink: {
    marginTop: '40px',
    display: 'flex',

  },

  link: {
    textDecoration: 'none',
    width: '250px',
    backgroundColor: '#3F3F41',
    padding: '7px',
    color: 'white',
    display: 'block',
    textAlign: 'center',
    borderRadius: '9999px',
    fontSize: '23px'
    
  },

  containerLogo: {
    display: 'flex',
    justifyContent: 'end',
    marginRight: '50px'
  }
});

const Aside = () => {
  const classes = useStyles();

  const solicitarTurno = [
    {
      id: 1,
      text: "Selecciona la oficina mas cercana.",
    },
    {
      id: 2,
      text: "Ingresa tus datos.",
    },
    {
      id: 3,
      text: "Selecciona el servicio",
    },
    {
      id: 4,
      text: "Verifica tu información.",
    },
  ];

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
            Solicita tu turno virtual
          </Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: 23,
            }}
          >
            y realiza todos tus trámites sin filas.
          </Typography>
          <Typography
            color="title"
            sx={{
              fontSize: 18,
              fontWeight: "700",
              marginTop: "45px",
            }}
          >
            Como solicitar tu turno
          </Typography>
          {solicitarTurno.map((e) => {
            return (
              <div key={e.id} className={classes.containerCirCle}>
                <div className={classes.circle}>
                  <Typography
                    color="white"
                    sx={{
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {e.id}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontSize: 18,
                    marginTop: "7px",
                    color: "#3F3F41",
                  }}
                >
                  {e.text}
                </Typography>
              </div>
            );
          })}
          <div className={classes.containerLink}>
            <Link className={classes.link} to="/offices" underline="none">Solicitar Turno</Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={7}>
        <img src={imgGrupo} alt="grupo" />
        <div className={classes.containerLogo}>
          <LogoText />
        </div>
      </Grid>
    </Grid>
  );
};

export default Aside;
