import React from 'react'
import '../navbar/navbar.css'

function navbar() {
    return (


        <div className="d-flex flex-column justify-content-center">
            <div className="navigation">
                <div>Home</div>
                <div>About</div>
                <div>Projects</div>
                <div>Resume</div>
                <div>Contact</div>
            </div>
            <div className="subnav"></div>
        </div>
    )
}

export default navbar