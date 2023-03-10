import React from 'react'
import SlideStyle from './slide.module.css'

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngular,
    faReact,
    faNode,
    faJs,
} from "@fortawesome/free-brands-svg-icons";


function SlideComponent({ ImageImg }) {
    return <Slide in={false} direction='left' mountOnEnter unmountOnExit>
        gabriel
        <div className={SlideStyle.element}> <span><FontAwesomeIcon icon={faAngular} /></span> <span>Angular</span> </div>
    </Slide>
}

export default SlideComponent