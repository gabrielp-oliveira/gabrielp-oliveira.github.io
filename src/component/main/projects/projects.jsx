import React from 'react'
import '../projects/projects.css'
import dino from '../imgs/img1.png'


function projects() {

    return (
        <div className="projects d-flex flex-md-column flex-lg-row">

            <div className="primeiro card" >
                <img src={dino} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Primeiro</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam inventore nemo vero excepturi nisi officiis fugit</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">Demo</a>
                        <a href="#" className="btn btn-primary">Code</a>

                    </div>
                </div>
            </div>

            <div className="segundo card" >
                <img src={dino} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Segundo</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam inventore nemo vero excepturi nisi officiis fugit</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">Demo</a>
                        <a href="#" className="btn btn-primary">Code</a>

                    </div>
                </div>
            </div>

            <div className="terceiro card" >
                <img src={dino} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Terceiro <i className="fa fa-github" aria-hidden="true"></i> <i className="fa fa-github" aria-hidden="true"></i> <i className="fa fa-github" aria-hidden="true"></i> <i className="fa fa-github" aria-hidden="true"></i></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aperiam inventore nemo vero excepturi nisi officiis fugit</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-primary">Demo</a>
                        <a href="#" className="btn btn-primary">Code</a>

                    </div>
                </div>
            </div>




        </div>
    )
}

export default projects