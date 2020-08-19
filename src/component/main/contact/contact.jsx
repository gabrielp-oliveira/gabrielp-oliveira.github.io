import React from 'react'

import '../contact/contact.css'

function Contact() {



    return (
        <div className="Contact align-self-center">
            <div className=" d-flex flex-column text-justify align-items-center">
                <div className="title-cont d-flex flex-column mt-1">
                    <span className="align-self-center" >feel free to contact me</span>
                    <span className="mb-1 align-self-center" >i will return soon as possible</span>
                    <i className="mb-1 align-self-center fa fa-smile-o" aria-hidden="true"></i>
                    <div id="resultado" className="alert d-none m-0" role="alert"></div>
                </div>

                <p className="mb-2"><a href="#" className="text-primary">pelfgofn.plot7$52874.tpc</a></p>
            </div>


            <form className="needs-validation"
                method="POST">
                <div className="form-row">
                    <div className="col-md-6 mb-2">
                        <label className="d-none d-sm-block" htmlFor="validationTooltip01">nome</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="Nome..." required ></input>
                        <div className="valid-tooltip">Tudo certo!</div>
                    </div>

                    <div className="col-md-6 mb-1">
                        <label className="d-none d-sm-block" htmlFor="validationTooltipUsername">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Email..." aria-describedby="validationTooltipUsernamePrepend" required ></input>
                            <div className="invalid-tooltip">Por favor, escolha um usuário válido e único.</div>
                        </div>
                    </div>

                </div>
                <div className="form-row"></div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" ></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" required placeholder="Type a message here..." ></textarea>
                </div>

                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact