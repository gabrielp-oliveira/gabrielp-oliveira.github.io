import React,{useContext, useState} from 'react';
import './navheader.css'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navheader from '../../elements-Data/navheader/navheader'
import { LanguageContext } from '../../context/languageContext'


function Sandwich() {
  const { Language } = useContext(LanguageContext)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="bars">
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} color="white" />
      </Button>
      
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >

        <a href="#Home"><MenuItem onClick={handleClose}> {navheader[Language].home}</MenuItem> </a>
        <a href="#about-conteiner"><MenuItem onClick={handleClose}> {navheader[Language].about} </MenuItem></a>
        <a href="#portfolio"><MenuItem onClick={handleClose}> {navheader[Language].portfolio} </MenuItem></a>
        <a href="#contact"><MenuItem onClick={handleClose}>{navheader[Language].contact} </MenuItem></a>
      </Menu>
    </div> 
  );
}

export default Sandwich