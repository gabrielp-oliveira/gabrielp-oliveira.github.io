import React from 'react';
import modalStyle from './modal.module.css'
import companyStyle from './company.module.css'
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";



export default function BasicModal({ open, setOpen, bg, data, language }) {

  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={modalStyle.ppop}
      >
        <div
          className={modalStyle.container}
        >
          <div className={`${modalStyle.modalTop} ${bg}`}>
            <img src={data.info.img} height='110px' width='110px'></img>
          </div>

          <div className={modalStyle.modalBottom}>
            <div>
              <p>{data[language].textTop}</p>
              <p>{data[language].detail}</p>
              <p>{data[language].text}</p>

            </div>
            <p className={modalStyle.date}>{data[language].date}</p>
            <div className={modalStyle.access}>
              <a target='_blank' href={data.info.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a>
              <a target='_blank' href={data.info.website}><FontAwesomeIcon icon={faLaptop} /></a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
