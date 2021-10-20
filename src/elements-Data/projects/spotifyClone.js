/* eslint-disable import/no-anonymous-default-export */
import img from '../../assets/imgs/spotifyClone.jpg'

export default {
    eng: {
        description: <span>this is a {<span className="target">clone of spotify</span>} , which aims to simulate its applications on web pages, obtaining {<span className="target">images and music</span>} from the user's artist albums.</span>,
        function: <span className="black">having user {<span className="target">authentication functionality</span>}, it is possible to obtain the {<span className="target" >user's</span>} playlists, with their <span className="target">music</span>,&nbsp;<span className="target">authors</span> and <span className="target">albums</span>.</span>,
        features:  <span  className="black">
        <span >get the user's {<span className="target">playlist</span>} with the description and tracks, </span> <span >a {<span className="target">30 seconds preview </span>} from each track from the user playlist, </span>
        <span>Albums {<span className="target">Recently Played</span>} by the user, </span>,
        <span >the {<span className="target">most searched artists</span>} by the user.</span>
        </span>
    },
    pt: {
        description: <span>este é um {<span className="target">clone do spotify</span>}, que tem por objetivo simular suas aplicaçoes em paginas web, obtendo {<span className="target">images e musicas</span>} dos albuns e artistas do usuario.</span>,
        function: <span className="black">possuindo as {<span className="target">funcionalidades de autenticação</span>} de usuario, é possivel obter as playlists do {<span className="target">usuario</span>}, com suas <span className="target">musicas</span>,&nbsp;<span className="target">autores</span>&nbsp;e <span className="target">albums</span>.</span>,

        features: <span  className="black"> <span >Retorna as {<span className="target">playlist</span>} do usuário com as descriçoes e faixas.</span> <span >Uma {<span className="target">Previa de 30 segundos</span>} de cada faixa da lista de reprodução do usuário.</span> <span >Álbuns {<span className="target">reproduzidos recentemente</span>} pelo usuário.</span> <span >Os {<span className="target">artistas mais pesquisados</span>} pelo usuario.</span> </span>
    },
    info: {
        title: 'Spotify Clone',
        img: img,
        urls: {
            visit: 'https://spotify---clone.herokuapp.com/',
            code: 'https://github.com/gabrielp-oliveira/spotify-clone',
            details: '#',
        },
        technologies: ['React JS,', 'spotify web api.']
    }

}