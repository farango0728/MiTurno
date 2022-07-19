import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import iconSearch from "../../assets/img/icon-search.svg";
import Offices from "../../data";

const useStyles = makeStyles({
  containerIcon: {
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },

  input: {
    padding: "6px 20px",
    border: "1px solid #EFEFEF",
    backgroundColor: "#EFEFEF",
    marginTop: "20px",
    borderRadius: "9999px",
    "&:focus": {
      outline: "2px solid transparent",
      outlineOffset: "2px",
    },
  },
  icon: {
    width: "30px",
    paddingTop: "20px",
    marginLeft: "-40px",
  },

  containerSede: {
    marginTop: "40px",
    display: "flex",
    borderBottom: "1px solid #A7A7A7",
    paddingBottom: "20px",
  },

  radio: {
    content: "",
    width: "16px",
    height: "16px",
    float: "left",
    margin: "0.5em 0.5em 0 0",
    border: "2px solid #cccccc",
    background: "#fff",
    borderRadius: "100%",
  },

  containerText: {
    marginLeft: "15px",
  },

  textTitle: {
    fontSize: "13px",
    margin: "0 auto",
    color: "#3F3F41",
    fontWeight: "900",
  },
  textSub1: {
    fontSize: "10px",
    margin: "10px auto 0px",
    color: "#A5A5A5",
  },

  textSub2: {
    fontSize: "10px",
    margin: "2px auto",
    color: "#A5A5A5",
  },
});

const SedeSelection = ({ selectSede, setSelectSede }) => {
  const classes = useStyles();

  const [newValue, setNewValue] = useState("");

  const handleInputChange = (e) => {
    setNewValue(e.target.value);
  };

  const filtered = !newValue
    ? Offices
    : Offices.filter((e) =>
        e.name.toLowerCase().includes(newValue.toLowerCase())
      );

  return (
    <form>
      <div className={classes.containerIcon}>
        <input
          className={classes.input}
          type="text"
          placeholder="Búsqueda"
          onChange={handleInputChange}
        />
        <img className={classes.icon} src={iconSearch} alt="icono buscar" />
      </div>
      {filtered.map((el) => {
        return (
          <div className={classes.containerSede} key={el.id}>
            <input
              className={classes.radio}
              type="radio"
              value="Sede 1"
              checked={selectSede.name === `${el.name}`}
              onChange={() =>
                setSelectSede({
                  name: `${el.name}`,
                  latitud: `${el.latitud}`,
                  longitud: `${el.longitud}`,
                  address: `${el.address}`,
                  date: `${el.date}`,
                })
              }
            />
            <div className={classes.containerText}>
              <p className={classes.textTitle}>{el.name}</p>
              <p className={classes.textSub1}>{el.address}</p>
              <p className={classes.textSub2}>Horario : {el.date}</p>
            </div>
          </div>
        );
      })}
    </form>
  );
};

export default SedeSelection;
