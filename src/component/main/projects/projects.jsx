import React from 'react'
import '../projects/projects.css'
import dino from '../imgs/img1.png'


function projects() {

    return (
        <div className="projects">
        <div className="justify-content-start container">

            <div className="row d-flex justify-content-center">
                <div id="primeiro"className="col-10 col-md-6 col-lg-12 col-xl-10">
                    <img src={dino} className="img-fluid mb-4" wm-city="New York"></img>
                </div>
                <div id="segundo"className="col-10 col-md-6 col-lg-5 col-xl-5">
                    <img src={dino} className="img-fluid mb-4" wm-city="New York"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corporis magni fugit labore necessitatibus est eaque, et consectetur rem dignissimos vel</p>
                </div>
                <div id="terceiro" className="col-10 col-md-6 col-lg-5 col-xl-5">
                    <img src={dino} className="img-fluid mb-4" wm-city="New York"></img>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, corporis magni fugit labore necessitatibus est eaque, et consectetur rem dignissimos vel</p>
                </div>
               
            </div>
        </div>
        <div> Mais projetos disponiveis em Github e Codepen :)</div>
        </div>
    )
}

export default projects