import React, { useContext } from "react";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import imgForm from "../../assets/img/Grupo1376.png";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const useStyles = makeStyles({
  root: {
    padding: "60px 70px 60px 100px",
  },

  containerInputText: {
    display: "flex",
    marginTop: "20px",
  },

  imgForm: {
    marginTop: "170px",
  },

  containerLogo: {
    display: "flex",
    justifyContent: "end",
    marginRight: "50px",
  },

  containerText: {
    marginTop: "40px",
    marginLeft: "20px",
  },

  textTitle: {
    fontSize: "17px",
    margin: "0 auto",
    color: "#3F3F41",
    fontWeight: "900",
  },
  textSub1: {
    fontSize: "13px",
    margin: "10px auto 0px",
    color: "#A5A5A5",
  },

  textSub2: {
    fontSize: "13px",
    margin: "2px auto",
    color: "#A5A5A5",
  },

  containerLink: {
    marginTop: "40px",
    marginLeft: "60px",
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

const AddDate = () => {
  const classes = useStyles();

  const { selectSede, datos, setDatos } = useContext(DataContext);
  const { name, address, date } = selectSede;

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <div className={classes.root}>
          <Typography
            color="primary"
            sx={{
              fontSize: 26,
              fontWeight: "800",
            }}
          >
            Ingresa tus datos
          </Typography>
          <FormControl
            variant="standard"
            sx={{ width: 400, marginTop: "40px" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Cedula de ciudadania
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={datos.cedulaCiudadania}
              onChange={handleInputChange}
              label="Cedula de ciudadania"
              name="cedulaCiudadania"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="colombia">Colombia</MenuItem>
              <MenuItem value="extranjero">Extranjero</MenuItem>
            </Select>
            <TextField
              sx={{ marginTop: "10px" }}
              id="standard-basic"
              label="Numero de documento"
              variant="standard"
              onChange={handleInputChange}
              name="numeroDocumento"
            />
            <div className={classes.containerInputText}>
              <TextField
                sx={{ width: 180, marginRight: "40px" }}
                id="standard-basic"
                label="Primer nombre"
                variant="standard"
                onChange={handleInputChange}
                name="primerNombre"
              />
              <TextField
                sx={{ width: 180 }}
                id="standard-basic"
                label="Segundo nombre"
                variant="standard"
                onChange={handleInputChange}
                name="segundoNombre"
              />
            </div>
            <div className={classes.containerInputText}>
              <TextField
                sx={{ width: 180, marginRight: "40px" }}
                id="standard-basic"
                label="Primer Apellido"
                variant="standard"
                onChange={handleInputChange}
                name="primerApellido"
              />
              <TextField
                sx={{ width: 180 }}
                id="standard-basic"
                label="Segundo Apellido"
                variant="standard"
                onChange={handleInputChange}
                name="segundoApellido"
              />
            </div>
          </FormControl>
          <div className={classes.containerText}>
            <p className={classes.textTitle}>{name}</p>
            <p className={classes.textSub1}>{address}</p>
            <p className={classes.textSub2}>Horario: {date}</p>
          </div>
          <div className={classes.containerLink}>
            <Link className={classes.link} to="/confirmDate">
              Siguiente
            </Link>
          </div>
        </div>
      </Grid>
      <Grid item xs={7}>
        <img className={classes.imgForm} src={imgForm} alt="grupo" />
      </Grid>
    </Grid>
  );
};

export default AddDate;
