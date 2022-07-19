import * as React from "react";
import { makeStyles } from "@mui/styles";
import arrow from "../assets/img/Grupo8.png";
import { Link } from "react-router-dom";
import Logo from "../assets/img/Cruzverde@2x.png";
import LogoText from "./home/LogoText";
import Progress1 from "./offices/Progress1";
import Progress2 from "./offices/Progress2";
import Progress3 from "./offices/Progress3";

const useStyles = makeStyles({
  root: {
    padding: 0,
    display: "flex",
  },
  img: {
    width: 266,
    height: 54,
    padding: "45px 80px",
    borderBottom: "1px solid #00000029",
    borderRight: "1px solid #00000029",
    borderBottomRightRadius: "70px",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },

  border: {
    borderTop: "1px solid #00000029",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },

  containerSeguimiento: {
    width: "100%",
    padding: "40px 60px 45px 80px",
    display: "flex",
    alignContent: "center",
  },

  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    marginRight: "100px",
  },

  arrow: {
    height: "15px",
  },

  linkText: {
    textDecoration: "none",
    fontSize: "18px",
    fontFamily: "lato",
    marginLeft: "20px",
    color: "#191919",
  },
});

export default function Header({ seguimiento, link, status }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <img className={classes.img} src={Logo} alt="logo" />
        {seguimiento && (
          <div className={classes.containerSeguimiento}>
            <Link className={classes.link} to={link}>
              <img className={classes.arrow} src={arrow} alt="atras" />
              <p className={classes.linkText}>atras</p>
            </Link>
            {status === 1 && <Progress1 status={status} />}

            {status === 2 && <Progress2 />}
            {status === 3 && <Progress3 />}

            <LogoText />
          </div>
        )}
      </div>
      {seguimiento && <div className={classes.border}></div>}
    </>
  );
}
