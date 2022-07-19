import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Logo from "../../assets/img/Cruzverde.png";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    boxShadow: 24,
    padding: "20px 20px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px auto'
  },

  containerButton: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px'
  },

  button: {
    padding: '5px 40px',
    fontSize: '17px',
    color: '#1F9547',
    fontFamily: 'lato',
    backgroundColor: 'white',
    border: "1px solid #1F9547",
    borderRadius: '9999px',
    fontWeight: '700',
    cursor: 'pointer'

  }
});

const style = {};

const ModalForm = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={classes.root}>
          <div>
            <img className={classes.img} src={Logo} alt="logo" />
            <Typography sx={{textAlign: 'center', fontSize: '25px', margin: '40px 80px', fontWeight: '900'}} id="modal-modal-title" color="primary">
              ¡Has solicitado tu turno con exito!
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '18px', margin: '0px 80px', fontWeight: '', color: '#7A7A7A'}} id="modal-modal-title">
              Servicio
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '16px', margin: '0px 80px', fontWeight: '900'}} id="modal-modal-title">
              Consulta externa
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '18px', margin: '20px 80px 0px 80px', fontWeight: '', color: '#7A7A7A'}} id="modal-modal-title">
              Día
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '16px', margin: '0px 80px', fontWeight: '900'}} id="modal-modal-title">
              10-05-2021
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '18px', margin: '20px 80px 0px 80px', fontWeight: '', color: '#7A7A7A'}} id="modal-modal-title">
              Hora
            </Typography>
            <Typography sx={{textAlign: 'center', fontSize: '16px', margin: '0px 80px', fontWeight: '900'}} id="modal-modal-title">
              02:00pm
            </Typography>
            <div className={classes.containerButton}>
              <button onClick={handleClose} className={classes.button}>Solicitar nuevo turno</button>
            </div>
            
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
