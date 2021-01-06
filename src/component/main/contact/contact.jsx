import React from 'react'

import '../contact/contact.css'

function Contact() {

    function handlerForm(event) {
        event.preventDefault()
    }

    return (
        <div className="Contact align-self-center">
            <div className=" d-flex flex-column text-justify align-items-center">
                <div className="title-cont d-flex flex-column mt-1">
                    <span className="align-self-center" >Fique avontade para entrar em contado</span>
                    <span className="mb-1 align-self-center" >Retornarei assim que possivel.</span>
                    <i className="mb-1 align-self-center fa fa-smile-o" aria-hidden="true"></i>
                    <div id="resultado" className="alert d-none m-0" role="alert"></div>
                </div>

                <p className="mb-2"><a href="mailto:gabriel.pso100@gmail.com">gabriel.pso100@gmail.com</a></p>
            </div>











            <form className=""
                method="POST">
                <div className="d-flex">
                    <div className="input">
                        <input type="text" required
                            name="name"></input>
                        <label htmlFor="name">nome</label>
                        <span className="error"></span>
                    </div>

                    <div className="input">
                        <input type="Email" required
                            name="Email"></input>
                        <label htmlFor="email">Email</label>
                        <span className="error"></span>

                    </div>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" ></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" required placeholder="Type a message here..." ></textarea>

                    <span className="error"></span>
                </div>

                <button className="bt-submit btn btn-primary" type="submit" onClick={(e) => handlerForm(e)}>Send</button>
            </form>
        </div>
    );
}

export default Contact