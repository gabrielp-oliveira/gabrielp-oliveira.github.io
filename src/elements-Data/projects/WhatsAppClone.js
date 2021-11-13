import img from '../../assets/imgs/whatsAppClone.jpg'
// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng:{
        description: <span>this is a <span className="target">clone of WhatsApp</span> , which aims to simulate its applications on web pages using E-mail, obtaining <span className="target">contacts and private groups</span> of the user.</span>,
        function: <span className="black">
            having the features of <span className="target">Registration and Login</span> , it is possible to <span className="target">add</span> new contacts, <span className="target">create</span> new private groups allowing those who have the <span className="target">status of administrator</span> to <span className="target">include and exclude</span> participants.<br /><br /><span  className="black">In addition to the <span className="target">messaging</span> functionality, we also store this information in a <span className="target">database</span>  that can be accessed at any time.</span>

        </span>,

        features: <span className="black">If you want to test the application, you can use this account:
        <br/>
        email: <strong><span>teste@teste.com</span></strong><br/>
        password: <strong><span>teste</span></strong> <br/>
        Feel free to use your email ass well.
        </span>,
    },
    pt:{
        description: <span>Este é um <span className="target">clone do WhatsApp</span>, que tem por objetivo replicarsuas funcionalidades em pagina web usando o Email, obtendo <span className="target">contatos e grupos privados</span> do usuario.</span>,
        function: <span className="black">
            Tendo os recursos de <span className="target">Registro e Login</span>, é possível <span className="target">adicionar</span>  novos contatos, <span className="target">criar</span> novos grupos privados possibilitando a quem tiver o <span className="target">status de administrador</span> a <span className="target">inclusao e exclusao</span> de participantes. <br /><br /><span  className="black"> Alem das funcionalidades de <span className="target">troca de mensagens</span>, tambem armazenamos essas informações em um <span className="target">banco de dados</span> que poderão ser acessadas a qualquer momento.</span>
            </span>,
        features: <span className="black">Caso queira testar a aplicação, você pode usar esta conta:
        <br/>
        email: <strong> <span>teste@teste.com</span></strong><br/>
        password: <strong><span>teste</span></strong> <br/>
        Fique avontade para usar seu proprio email.
        </span>,

    },
    info:{
        title:'WhatsApp Clone',
        img: img,
        urls: {
            visit: 'https://gabrielp-oliveira.github.io/Whatsapp-Clone/',
            code: 'https://github.com/gabrielp-oliveira/Whatsapp-Clone',
            details: '#',
        },
        technologies: [
            'Angular Js,',
            'Angular Material UI,',
            'Express Js,',
            'Socket Io,',
            'MongoDb,',
            'Node Js.']
    }
    
}