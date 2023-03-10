import React,{useState, useEffect} from 'react';
import errorModalStyle from './errorModal.module.css'

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { faExclamation, faQuestion, faCheck, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import zIndex from '@material-ui/core/styles/zIndex';
const status = {
  Error: ReturnError(),
  Warning: ReturWarning(),
  Success: ReturSuccess()
}
function ReturnError() {
  return <FontAwesomeIcon icon={faExclamation} style={{ fontSize: '25px' }} />
}

function ReturSuccess() {
  return <FontAwesomeIcon icon={faCheck} style={{ fontSize: '25px' }} />
}
function ReturWarning() {
  return <FontAwesomeIcon icon={faQuestion} style={{ fontSize: '25px' }} />
}


const direction = ['left', 'right', 'up', 'down']

export default function ErrorModal({ open, setOpen, data, top, left }) {
  const handleClose = () => setOpen(false);
  const [reflex, setReflex] = useState({})

  function startAnimation(){
    setReflex(<span className={errorModalStyle.symbLightReflex}
      style={{
        background: `linear-gradient(308deg, transparent, ${data.color} 0%, rgba(255,255,255,1) 100%)`
      }}></span>)
    setTimeout(() => {
      setReflex(() => <Reflex color={data.color}/>)
      
    }, 0);
  }
  useEffect(() => { setReflex(<Reflex color={data.color}/> ) }, [])
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open} direction={direction[Math.floor(Math.random() * 4)]} mountOnEnter unmountOnExit>
          <div className={errorModalStyle.modalContainer} style={{ left, top }}>
            <div className={errorModalStyle.content}>
              <div className={errorModalStyle.header}>
                <div >
                  <span className={errorModalStyle.title} style={{ color: 'rgb(54, 54, 54)' }}>
                    {data.title}
                  </span>
                  <span className={errorModalStyle.cog}>
                    <FontAwesomeIcon icon={faCog} className={errorModalStyle.bigCog} />
                    <FontAwesomeIcon icon={faCog} className={errorModalStyle.smallCog} />

                  </span>
                </div>
                <ul>
                  {/* <li>-</li> */}
                  <li className={errorModalStyle.close} onClick={() => handleClose(false)} >x</li>
                </ul>
              </div>
            </div>
            <div className={errorModalStyle.body}>

              <div className={errorModalStyle.left}>

                <span className={errorModalStyle.tagwrap} >
                  <span className={errorModalStyle.symb} style={{ backgroundColor: data.color }} onMouseEnter={startAnimation}>
                    <span style={{ zIndex: 2, fontSize: '20px' }}>
                      {status[data.title]}

                    </span>
                    {reflex}                
                  </span>
                </span>
              </div>

              <div className={errorModalStyle.right}>

                <p className={errorModalStyle.text}>{data.text}</p>
              </div>
            </div>


          </div>
        </Slide>
      </Modal>
    </div>
  );
}

function Reflex({color}){

  return <span className={errorModalStyle.symbLightReflex}
  style={{
    background: `linear-gradient(308deg, transparent, ${color} 0%, rgba(255,255,255,1) 100%)`
  }}></span>
}