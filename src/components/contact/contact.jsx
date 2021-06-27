import React, { useState, useContext, useRef, useEffect } from "react";
import "./contact.css";
import contact from "../../elements-Data/contact/contact";
import emailjs from "../../../node_modules/emailjs-com/dist/email";
import { LanguageContext } from "../../context/languageContext";
import { validateForm, checkEmailDomain } from "./validateForm";

//----
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from '@material-ui/core';

//-----
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faEnvelope,faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faCodepen,faGithub} from "@fortawesome/free-brands-svg-icons";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Contact() {
  const [result, setResult] = useState("OK");
  const [target, setTarget] = useState();
  const { Language } = useContext(LanguageContext);
  const form = useRef();

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();
    const email = form.current.elements[1].value.trim();
    if (validateForm(form)) {
      checkEmailDomain(email)
      .catch((err) => {
        console.log(err)
        setResult(err.error)
        handleOpen()
        return
    });
      emailjs.sendForm(
          process.env.REACT_APP_EMAIL_ID,
          process.env.REACT_APP_USER_ID,
          e.target, process.env.REACT_APP_ACESS_TOKEN)
          .then((result) => {
              console.log(result)
              setResult(result.text)
              handleOpen()
          })
          .catch((err) => {
            console.log(err)
            setResult(err.error)
            handleOpen()
            return
        });
    } else {
      console.log("form invalido");
      setResult('Error')
      handleOpen()
    }
    form.current.reset();
  }



  return (
    <div id="contact">
      <h2 className="title">{contact[Language].contact}</h2>

      <form className="form" ref={form} onSubmit={sendEmail}>
        <span>{contact[Language].text}</span>
        <div className="social">
          <span> <FontAwesomeIcon icon={faGithub} /> </span>
          {/* <span> <FontAwesomeIcon icon={faCodepen} /> </span> */}
          <span> <FontAwesomeIcon icon={faLinkedin} /> </span>
        </div>
        <p>
          <a href="mailto:gabriel.pso100@gmail.com" className="emailContact">
            {contact[Language].emailMessage}{" "}
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
        </p>

        <div className="form-top">
          <div className="input-conteiner">
            <label htmlFor="Name" >
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input type="text" className="name" placeholder={contact[Language].name} name="name" />
          </div>
          <div className="input-conteiner">
            <label htmlFor="Email" >
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input type="text" className="email" placeholder="Email" name="email" />
          </div>
        </div>
        <div className="subject">
          <input type="text" placeholder={contact[Language].subject} className="subject-input" name="subject"/>
        </div>
        <div className="message">
          <textarea type="text" placeholder={contact[Language].message} name="message" />
        </div>
        <button>{contact[Language].send}</button>
      </form>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {result === "OK" ? (
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                { contact[Language].contactSended.title}
              </h2>
              <br />
              <hr />
              <p id="transition-modal-description">
                {contact[Language].contactSended.text}
              </p>
              <Button ariant="contained" color="primary" onClick={handleClose} className="okButton">Ok</Button>
            </div>
          ) : (
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                {contact[Language].contactError.title}
              </h2>
              <br />
              {result}
              <hr />

              <p id="transition-modal-description">
                {contact[Language].contactError.text}
              </p>
              <Button ariant="contained" color="primary" onClick={handleClose} className="okButton">Ok</Button>

            </div>
          )}

        </Fade>
      </Modal>
    </div>
  );
}

export default Contact;
