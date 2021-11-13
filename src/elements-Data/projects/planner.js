import img from '../../assets/imgs/plannerImg.jpg'

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng:{
        description: <span>inspired in the <span className="target">Microsoft Planner </span>, this tool helps you to <span className="target">create</span> a <span className="target">simple</span> and <span className="target">visual</span> way to organize work that is updated in <span className="target">real time </span>for the entire team.</span>,

        function:<span key="1" className="black">Having the features of <span className="target">Registration and Login  </span>, solutions and task changes will be updated in <span className="target">real time</span>,so even working remotely and concurrently with other people, the planner will update to everyone at the same time.</span>,
        features: <span className="black">If you want to test the application, you can use this account:
             <br/>
             email: <strong><span>teste@teste.com</span></strong><br/>
             password: <strong><span>password</span></strong> <br/>
             Feel free to use your email ass well.
             </span>,
    },
    pt:{
        description: <span>inspirada no <span className="target">Microsoft Planner</span>, esta ferramenta ajuda você a <span className="target">criar</span> uma forma <span className="target">simples</span> e <span className="target">visual</span> de organizar o trabalho que é atualizado em <span className="target">tempo real</span> para toda a equipe.</span>,

        function: <span key="2" className="black">Tendo os recursos de <span className="target">Registro e Login </span> as soluções e mudanças de tarefas serão <span className="target">atualizadas em tempo real</span>, então mesmo trabalhando remotamente e simultaneamente com outras pessoas, o Planner será atualizado para todos ao mesmo tempo</span>,
        features: <span className="black">Caso queira testar a aplicação, você pode usar esta conta:
        <br/>
        email: <strong> <span>teste@teste.com</span></strong><br/>
        password: <strong><span>password</span></strong> <br/>
        Fique avontade para usar seu proprio email.
        </span>,

    },
    info:{
        title:'Planner',
        img: img,
        urls: {
            visit: 'https://gabrielp-oliveira.github.io/planner-task/#/',
            code: 'https://github.com/gabrielp-oliveira/planner-task',
            details: '#',
        },
        technologies: [
            'React,',
            'Typescript,',
            'Axios,',
            'chart.js,',
            'Material-ui,',
            'Socket.io,',
            'Express Js,',
            'Nodemailer,',
            'mongoose.']
    }
    
}