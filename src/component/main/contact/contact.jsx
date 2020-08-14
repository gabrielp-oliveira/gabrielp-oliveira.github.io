import React, { useState } from 'react'
import axios from 'axios';

import '../contact/contact.css'

function Contact() {
    const [EmailContent, setEmailContent] = useState({});

    function formSubmit(event) {
        event.preventDefault();
        if (EmailContent.nome === null || EmailContent.text === null) {
            handleError({ message: 'Campo Vazio. Tente novamente.' })
        }else if(EmailContent.email === null ){
            handleError({ message: 'Email Invalido. Tente novamente.' })
        }
        else {
            axios.post('/email', EmailContent)
                .catch(handleError)
                .then(document.querySelector('#resultado').innerHTML = 'Mensagem enviada com sucesso!')
                .then(document.querySelector('#resultado').className = 'p-3 mb-1')
                .then(document.querySelector('#resultado').classList.add('alert-success'))
                .then(document.querySelector('.fa-smile-o').className ='align-self-center fa fa-smile-o d-none')
            for (let i = 0; i < event.target.elements.length; i++) {
                event.target.elements[i].value = ''
            }
            setEmailContent({})
        }
    }

    function handleError(error) {
        document.querySelector('#resultado').innerHTML = `${error.message}`

        document.querySelector('#resultado').className = 'p-3 mb-2'
        document.querySelector('#resultado').classList.add('alert-danger')
        document.querySelector('.fa-smile-o').className ='align-self-center fa fa-smile-o d-none'
    }

    function handleName(e) {
        e.target.value.trim() !== '' ? EmailContent.name = e.target.value : EmailContent.name = null
        console.log(EmailContent)
    }
    function handleEmail(e) {
        validateEmailAddress(e.target.value.trim()) ? EmailContent.email = e.target.value.trim() : EmailContent.email = null
        console.log(EmailContent)
    }
    function handleText(e) {
        e.target.value.trim() !== '' ? EmailContent.text = e.target.value : EmailContent.text = null
        console.log(EmailContent)
    }



    function validateEmailAddress(email) {
        var expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return expression.test(String(email).toLowerCase());
    }


    return (
        <div className="Contact align-self-start">
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
                method="POST"
                onSubmit={(e) => formSubmit(e)}>
                <div className="form-row">
                    <div className="col-md-6 mb-2">
                        <label className="d-none d-sm-block" htmlFor="validationTooltip01">nome</label>
                        <input type="text" className="form-control" id="validationTooltip01" placeholder="Nome..." required value={EmailContent.nome} onChange={(e) => handleName(e)}></input>
                        <div className="valid-tooltip">Tudo certo!</div>
                    </div>

                    <div className="col-md-6 mb-1">
                        <label className="d-none d-sm-block" htmlFor="validationTooltipUsername">Email</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                            </div>
                            <input type="text" className="form-control" id="validationTooltipUsername" placeholder="Email..." aria-describedby="validationTooltipUsernamePrepend" required value={EmailContent.email} onChange={(e) => handleEmail(e)}></input>
                            <div className="invalid-tooltip">Por favor, escolha um usuário válido e único.</div>
                        </div>
                    </div>

                </div>
                <div className="form-row"></div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" ></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" required placeholder="Type a message here..." value={EmailContent.text} onChange={(e) => handleText(e)}></textarea>
                </div>

                <button className="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    );
}

export default Contact