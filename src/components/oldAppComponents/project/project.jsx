import React, { useContext, useState, useEffect, useRef } from "react";
import "./project.css";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faTimes } from '@fortawesome/free-solid-svg-icons'

import { LanguageContext } from "../../../context/languageContext";
import {  VersionContext} from "../../../context/VersionContext";

function Project({ data }) {
  const { Language } = useContext(LanguageContext);
  const { Version } = useContext(VersionContext);
  const [open, setOpen] = useState(false);
  const [tec, setTec] = useState([]);
  const [width, setWidth] = useState(1000)

  const projDesc = useRef();
  const img = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if(Version){

    setTec([])
    data.info.technologies.forEach(element => {
        setTec(oldArray => [...oldArray, <strong key={element}>{element} &nbsp;</strong>])
    });
  }
  }, [data.info.technologies])

  useEffect(() => {
    if(Version){
    if(window.screen.width < 1000){
        setWidth(window.screen.width-50)
    }
  }
}, [])


window.addEventListener('resize',(e) => {
  if(Version){
    
    if(e.target.innerWidth < 1000){
      setWidth(e.target.innerWidth-50)
      if(e.target.innerWidth < 380){
        img.current.style.opacity = 1
      }else{
        img.current.style.opacity = '0.3'
      }
    }else{
      setWidth(950)
    }
  }
})

  
  function projMouseEnter(e){
    if(window.screen.width > 380){
      img.current.style.opacity = 1
      projDesc.current.style.opacity = 0
    }else{
      img.current.style.opacity = 1
    }
  }
  
  function projMouseLeave (e){
    if(window.screen.width > 380){
      img.current.style.opacity = '0.3'
      projDesc.current.style.opacity = 1
    }else{
      img.current.style.opacity = 1
    }
  }
  return (
    <div className="proj" onMouseEnter={e => projMouseEnter(e)} onMouseLeave={e => projMouseLeave(e)}>
      <div className="proj-info" onClick={handleClickOpen} s>

        <div className="proj-Card">
          <img className="img" src={data.info.img} alt={data.info.title} ref={img} />
          <div ref={projDesc} className="projDesc">
            <h3>{data.info.title}</h3>
            <span>{data[Language].description}</span>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            style: {
              backgroundColor: 'white',
            },
          }}
      >
        <DialogTitle id="alert-dialog-title">{data.info.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" >
            {data[Language].function}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description" >
            {data[Language].features}
          </DialogContentText>
              <hr />
              <br/>
          <DialogContentText id="alert-dialog-description" >
            {tec}
          </DialogContentText>

        </DialogContent>
        <div className="project-buttons">
          <Button onClick={handleClose} color="secondary">
            <FontAwesomeIcon icon={faTimes} className="fa-2x"/>
          </Button>
          <Button color="primary"  href={data.info.urls.visit} target="_blank">
            <FontAwesomeIcon icon={faDesktop} className="fa-2x"/>
          </Button>
          <Button color="primary"  autoFocus  href={data.info.urls.code} target="_blank">
            <FontAwesomeIcon icon={faGithub}  className="fa-2x" />
          </Button>
        </div>
      </Dialog>
    </div>
  );
}

export default Project;
