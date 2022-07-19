import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {

  },

  title: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '900'
  },
  sub: {
    margin: 0,
    fontSize: '12px'
  }
});



const Logo = () => {
  const classes = useStyles();

  return (
    <div>
      <p className={classes.title}>Netux</p>
      <p className={classes.sub}>2020 Netux <span>&#174;</span></p>
    </div>
  )
}

export default Logo