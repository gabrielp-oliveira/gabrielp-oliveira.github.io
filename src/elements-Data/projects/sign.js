import img from '../../assets/imgs/sign.jpg'

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng:{
        description: <span>this is a  {<span className="target">Jyotisha chart </span>}also known as {<span className="target">Vedic astrology </span>} which is an Indian system of astrology that uses {<span className="target">Ayanamsa Lahiri</span>}, being different from the traditional western astrology.</span>,
        function:<span key="1" className="black">having the features of {<span className="target">Registration and Login  </span>} it is possible to obtain the {<span className="target">user's Vedic astrology signs</span>}, also store this information in a {<span className="target">database</span>} that can be accessed at any time.</span>,
        features: <span className="black">If you want to test the application, you can use this account:
        <br/>
        email: <strong><span>teste@teste.com</span></strong><br/>
        password: <strong><span>teste</span></strong> <br/>
        Feel free to use your email ass well.
        </span>,
    },
    pt:{
        description: <span>Este é um  {<span className="target">mapa Jyotisha</span>} também conhecido como {<span className="target">astrologia védica</span>}, que é um sistema indiano de astrologia que usa Ayanamsa Lahiri, sendo diferente da astrologia ocidental tradicional.</span>,
        function: <span key="2" className="black">tendo os recursos de {<span className="target">Registro e Login </span>} é possível obter os {<span className="target"> signos da astrologia védica do usuário</span>}, além de armazenar essas informações em um {<span className="target"> banco de dados</span>} que pode ser acessado a qualquer momento.</span>,
        features:  <span className="black">Caso queira testar a aplicação, você pode usar esta conta:
        <br/>
        email: <strong> <span>teste@teste.com</span></strong><br/>
        password: <strong><span>teste</span></strong> <br/>
        Fique avontade para usar seu proprio email.
        </span>
    },
    info:{
        title:'Sign',
        img: img,
        urls: {
            visit: 'https://gabrielp-oliveira.github.io/sign/#/sign/login',
            code: 'https://github.com/gabrielp-oliveira/sign',
            details: '#',
        },
        technologies: [
            'React JS,',
            'React-router-dom,',
            'Node Js,',
            'Express Js.']
    }
    
}