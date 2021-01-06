import React from 'react'
import '../navbar/navbar.css'
import resume from '../main/resume/resume.pdf'
function navbar() {
    return (


        <div className="d-flex flex-column justify-content-center">
            {/* <div className="navigation">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Resume</div>
                <div>Contact</div>
            </div> */}

            <nav className="navbar navbar-expand-sm navbar-dark nav_ p-0">
                <button className="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav navigation">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Projects</li>
                        <a className="nav-item" target="_blank" rel="noreferrer" href={resume}>Resume</a>
                        <li className="nav-item">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar