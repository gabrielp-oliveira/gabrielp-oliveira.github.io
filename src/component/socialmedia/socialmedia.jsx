import React from 'react'
import '../socialmedia/socialmedia.css'

function socialmedia(){

    return(
        <ul className="social d-flex align-self-center">
            <li><i className="fa fa-github align-content-start" aria-hidden="true"></i></li>
            <li><i className="fa fa-codepen align-content-center" aria-hidden="true"></i></li>
            <li><i className="fa fa-linkedin-square align-content-end" aria-hidden="true"></i></li>
        </ul>
    )
}

export default socialmedia