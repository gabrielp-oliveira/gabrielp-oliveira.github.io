import React from 'react'
import '../navbar/navbar.css'

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

            <nav class="navbar navbar-expand-sm navbar-dark nav_ p-0">
                <button class="navbar-toggler m-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav navigation">
                        <li class="nav-item">Home</li>
                        <li class="nav-item">About</li>
                        <li class="nav-item">Projects</li>
                        <li class="nav-item">Resume</li>
                        <li class="nav-item">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default navbar