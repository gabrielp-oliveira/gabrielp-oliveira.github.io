import React, { useContext, useState, useRef } from "react";
import { Button } from '@material-ui/core'
import contactStyle from './contact.module.css'
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { LanguageContext } from "../../../context/languageContext";
import ContactData from "../../../elements-Data/contact/contact";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import api from '../../../api/sendEmail'
import Formvalidation from "../../oldAppComponents/contact/validateForm";

import Ship from '../../../assets/ship'

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
  const [result, setResult] = useState();
  const [target, setTarget] = useState(false);
  const { Language } = useContext(LanguageContext);
  const form = useRef();

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    form.current.reset();
    setTarget(false)
  };

  const handleClose = () => {
    setOpen(false);
    setTarget(false)
  };

  function sendEmail(e) {
    setTarget(true)
    e.preventDefault();
    const name = form.current.elements[0].value.trim()
    const email = form.current.elements[1].value.trim()
    const subject = form.current.elements[2].value.trim()
    const message = form.current.elements[3].value.trim()
    if (Formvalidation.validateForm(form)) {
      api.post('/', {
        info: { name, email, subject, message, Language: Language }
      })
        .then((result) => {
          if (result.data.error) {
            setResult(result.data.error)
            handleOpen()
          } else {
            setResult(result.data.ok)
            handleOpen()
          }
        })
        .catch((err) => {
          setResult(err.error)
          handleOpen()
          return
        });
    } else {
      setResult('Error')
      handleOpen()
    }
  }

  return (
    <>
      <div className={contactStyle.Contact} id={contactStyle.Contact}>
        <div>
          <h1>{ContactData[Language].contact}</h1>
          <span>{ContactData[Language].text}</span>
          <a href="mailto:gabriel.pso100@gmail.com" className="emailContact">
            {ContactData[Language].emailMessage}{" "}
            <FontAwesomeIcon icon={faPaperPlane} />
          </a>
          <form className="" ref={form} onSubmit={sendEmail}>
            <div className={contactStyle.nameEmail}>
              <span className={contactStyle.input}>
                <label htmlFor="name"> <FontAwesomeIcon icon={faUser} /> </label>
                <input type="text" name="name" id="name" placeholder={ContactData[Language].name} />

              </span>

              <span className={contactStyle.input}>
                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /></label>
                <input type="email" name="email" id="email" placeholder='email' />

              </span>
            </div>
            <span className={contactStyle.input}>
              <label htmlFor="subject"></label>
              <input type="subject" name="subject" id="subject" placeholder={ContactData[Language].subject} />

            </span>
            <span className={contactStyle.textarea}>
              <label htmlFor="message"></label>
              <textarea type="text" name="message" id="message" placeholder={ContactData[Language].message} />

            </span>
            <Button  disabled={target} variant="contained" size="large" type="submit"
        >
          {ContactData[Language].send}
        </Button>


          </form>

        </div>
        <Ship color="white" height="150px" width="150px" />

      </div>
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
                {ContactData[Language].contactSended.title}
              </h2>
              <br />
              <hr />
              <p id="transition-modal-description">
                {ContactData[Language].contactSended.text}
              </p>
              <Button ariant="contained" color="primary" onClick={handleClose} className="">Ok</Button>
            </div>
          ) : (
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                {ContactData[Language].contactError.title}
              </h2>
              <br />
              {result}
              <hr />

              <p id="transition-modal-description">
                {ContactData[Language].contactError.text}
              </p>
              <Button ariant="contained" color="primary" onClick={handleClose} className="">Ok</Button>

            </div>
          )}

        </Fade>
      </Modal>

    </>

  )
}

export default Contact