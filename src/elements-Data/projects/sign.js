import img from '../../assets/imgs/sign.jpg'

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng:{
        description: <p>This app is hosted on {<span className="target">heroku</span>}  free plan, meaning that on the initial load, the server mat neet to start which can cause a {<span className="target">delay</span>}.</p>,

        function:<p>having the features of {<span className="target">Registration and Login  </span>} it is possible to obtain the user's {<span className="target">Vedic astrology signs</span>}, also store this information in a {<span className="target">database</span>} that can be accessed at any time.</p>,

        difficults: <p>english english englis4h english english english english english english english english english english english english english english english english english english</p>,

        solution: <p>english english english english english english english english english english english english english english english engli3sh english english english english english</p>,

        features: [
        <span key="1">get the user's {<span className="target">playlist</span>} with the description and tracks</span>,
        <span key="2">a {<span className="target">30 seconds preview </span>} of each track from the user playlist</span>,
        <span key="3">Albums {<span className="target">Recently Played</span>} by the user</span>,
        <span key="4">the {<span className="target">most searched artists</span>} by the user.</span>
    ],


        headers: [ 'Function', 'Difficults', 'Solution', 'Features']
    },
    pt:{
        description: <p>Este aplicativo está hospedado no plano gratuito do {<span className="target">heroku</span>}, o que significa que na primeira iniciação, o servidor pode causar um {<span className="target">atraso</span>}.</p>,
        function: <p>possuindo as funcionalidades de {<span className="target">Registro e Login</span>} é possivel obter os {<span className="target">signos da astrologia védica</span>} do usuario, tambem armazenar essas informaçoes em um {<span className="target">banco de dados</span>} que podem ser acessadas a qualquer momento.</p>,
        difficults: <p>pt/br pt/b1r pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br </p>,
        solution: <p>pt/br pt/br 2pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br pt/br </p>,
        features: [
            <span key="6">Retorna as {<span className="target">playlist</span>} do usuário com as descriçoes e faixas.</span>,
            <span key="7">Uma {<span className="target">Previa de 30 segundos</span>} de cada faixa da lista de reprodução do usuário.</span>,
            <span key="8">Álbuns {<span className="target">reproduzidos recentemente</span>} pelo usuário.</span>,
            <span key="5">Os {<span className="target">artistas mais pesquisados</span>} pelo usuario.</span>
        ],
        headers: [ 'Funçoes', 'Dificuldades', 'Soçução', 'Recursos']

    },
    info:{
        title:'Sign',
        img: img,
        urls: {
            visit: '#',
            code: '#',
            details: '#',
        },
        technologies: [
            'React JS',
            'React-router-dom',
            'Axios',
            'fontawesome']
    }
    
}