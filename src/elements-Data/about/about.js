import pdfPt from '../../assets/pdf/GabrielOliveira.pdf'
import pdfEng from '../../assets/pdf/Gabriel-Oliveira.pdf'
// eslint-disable-next-line import/no-anonymous-default-export
export default  {
    eng: {
        about_text: `I'm Full-stack web developer, with a passion to build interactive, responsive and
        user friendly applications. I have always focused on using modern technologies
        with best practices, resulting in overall client satisfaction.`,
        about_sub_text:'For more information on professional and academic background, access the resume at the button below.',
        button: 'Resume',
        about:'About',
        resume: pdfEng,
        continue: 'Or check a few contributions in the following companies.'



    },
    pt: {
        about_text: 'Eu sou um desenvolvedor Full-stack, com uma paixão em construir tecnologias interativas, responsivas e amigáveis para os usuários. Focado em  combinar tecnologias modernas de mercado com conhecimento, resultando em um código limpo e objetivo.',
        about_sub_text:'Para mais informaçoes de historico profissional e academico, acesse o curriculo no botao abaixo.',
        button: 'Curriculo',
        about:'Sobre',
        resume: pdfPt,
        continue: 'Ou de confira algumas contribuições das seguintes empresas.'


    }
}