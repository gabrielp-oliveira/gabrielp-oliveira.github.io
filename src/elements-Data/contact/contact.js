import React from 'react'
// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng:{
        contact:'Contact',
        text: 'Feel free to get in touch, I will return as soon as possible.',
        emailMessage: 'Send a email.',
        name:'Name',
        subject:'subject',
        message:'Message',
        send: 'Send',
        contactError: {
            title: 'Error',
            text: <>Ops, Unexpected error. Try again later or send an email to <a href="mailto:gabriel.pso100@gmail.com" className="focus">gabriel.pso100@gmail.com</a> </>
        },
        contactSended:{
            title: 'Message success sended !',
            text: 'A confirmation email has been sent to your email, I will contact you as soon as possible.'
        }

    },
    pt:{
        contact:'Contato',
        text:'Entre em contato, retornarei assim que possivel.',
        emailMessage: 'Envie um email.',
        name:'Nome',
        subject:'Assunto',
        message:'Mensagem',
        send: 'Enviar',
        contactError: {
            title: 'Erro',
            text: <>Ops, Erro inesperado.Tente novamente mais tarde ou envie um email para <a href="mailto:gabriel.pso100@gmail.com" className="focus">gabriel.pso100@gmail.com</a> </>
        },
        contactSended:{
            title: 'Mensagem enviada com sucesso!',
            text: 'Um email de confirmação foi enviado para o seu email, entrarei em contato assim que possivel.'
        }
}
}