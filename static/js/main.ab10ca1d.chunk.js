(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,s){},119:function(e,t,s){},120:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(8),r=s.n(n),i=(s(83),s(84),{pt:"Desenvolvedor Front-End",eng:"Front-End Developer"}),o={eng:{home:"Home",about:"About",portfolio:"Portfolio",contact:"Contact",ariaLabel:"navigation button of the header."},pt:{home:"Inicio",about:"Sobre",portfolio:"Projetos",contact:"Contato",ariaLabel:"Botao de navega\xe7\xe3o do cabe\xe7alho."}},l=(s(85),s(0));var j=function(){return Object(l.jsx)("div",{className:"custom-shape-divider-bottom-1613724039",children:Object(l.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(l.jsx)("path",{fill:"white",d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",className:"shape-fill"}),Object(l.jsx)("path",{fill:"white",d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",className:"shape-fill"}),Object(l.jsx)("path",{fill:"white",d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",className:"shape-fill"})]})})};s(87);var d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{}),Object(l.jsx)("i",{})]})},b=s(14),p=(s(88),Object(a.createContext)({}));function h(e){var t=e.children,s=Object(a.useState)("eng"),c=Object(b.a)(s,2),n=c[0],r=c[1];return Object(l.jsx)(p.Provider,{value:{Language:n,SetLanguage:r},children:t})}var u=s(7),m=s(19),x=s(40),O=s(46),g=(s(93),s(159)),f=s(158),v=s(160),N=s(152);function y(){var e,t=Object(a.useContext)(p),s=t.Language,n=t.SetLanguage,r=c.a.useState({left:!1}),i=Object(b.a)(r,2),j=i[0],d=i[1],h=function(e,t){return function(s){(!s||"keydown"!==s.type||"Tab"!==s.key&&"Shift"!==s.key)&&d(Object(O.a)(Object(O.a)({},j),{},Object(x.a)({},e,t)))}};return Object(a.useEffect)((function(){"eng"===navigator.language?n("eng"):n("pt")}),[]),Object(l.jsxs)("div",{className:"bars",children:[Object(l.jsx)(f.a,{onClick:h("left",!0),"aria-label":o[s].ariaLabel,children:Object(l.jsx)(u.a,{icon:m.a,color:"white"})}),Object(l.jsx)(g.a,{open:j.left,onClose:h("left",!1),onOpen:h("left",!0),children:(e="left",Object(l.jsxs)("div",{className:"list",role:"presentation",onClick:h(e,!1),onKeyDown:h(e,!1),children:[Object(l.jsx)(v.a,{children:Object(l.jsxs)("div",{className:"SideNav",children:[Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#Home",children:o[s].home})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#about",children:o[s].about})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#portfolio",children:o[s].portfolio})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#contact",children:o[s].contact})," "]})]})}),Object(l.jsx)(N.a,{})]}))})]})}var w=function(){var e=Object(a.useContext)(p),t=e.Language,s=e.SetLanguage,c=Object(a.useState)(),n=Object(b.a)(c,2),r=n[0],i=n[1],j=Object(a.useState)("Light"),d=Object(b.a)(j,2),h=d[0],x=d[1];function O(){var e=document.querySelector("#Home"),t=document.documentElement,s=document.querySelector(".astro"),a=document.querySelector(".adjustIcon"),c=document.querySelector(".form"),n=document.querySelector(".body-conteiner"),r=document.querySelector(".transicao");"Dark"===h?(s.childNodes.forEach((function(e){e.style.display="none"})),s.style.height="20rem",s.style.width="20rem",s.style.backgroundColor="rgb(243, 175, 148)",t.style.cssText="--Body: rgb(255, 255, 255)",e.style.background="linear-gradient(135deg, rgba(238,174,212,1) 0%, rgba(116,116,221,1) 100%)",a.style.filter="none",c.style.background="rgb(0, 0, 0, 0.2)",n.style.background="rgb(0, 0, 0, 0.2)",r.style.background="linear-gradient(0deg, rgb(255,255,255) 0%, var(--Dark) 100%)",x("Light"),window.screen.width>=850?(s.style.top="4%",s.style.left="3%"):(s.style.top="1%",s.style.left="-3%")):(s.childNodes.forEach((function(e){e.style.display="block"})),s.style.height="16.5rem",s.style.width="16.5rem",s.style.backgroundColor="rgb(240,240,240)",t.style.cssText="--Dark: rgb(5, 0, 32)",e.style.background="linear-gradient(190deg, rgb(52, 11, 68) -20%, rgb(2, 53, 63) 100%)",a.style.filter="invert()",c.style.background="rgb(255, 255, 255, 0.1)",n.style.background="rgb(255, 255, 255, 0.02)",r.style.background=" linear-gradient(0deg, rgb(5, 5, 5) 20%, var(--Dark)100%)",x("Dark"),window.screen.width>=850?(s.style.top="10%",s.style.left="72%"):(s.style.top="10%",s.style.left="54%"))}return Object(a.useEffect)((function(){"pt"===navigator.language?(s("pt"),i("eng")):(s("eng"),i("pt/br")),O()}),[]),window.addEventListener("resize",(function(e){var t=document.querySelector(".astro");e.target.innerWidth>=850?"Dark"===h?(t.style.top="10%",t.style.left="72%"):(t.style.top="4%",t.style.left="3%"):"Dark"===h?(t.style.top="10%",t.style.left="54%"):(t.style.top="1%",t.style.left="-3%")})),Object(l.jsx)("div",{className:"navHeader-Container",children:Object(l.jsxs)("div",{className:"navHeader",children:[Object(l.jsxs)("div",{className:"navBar",children:[Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#Home",children:o[t].home})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#about",children:o[t].about})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#portfolio",children:o[t].portfolio})]}),Object(l.jsxs)("span",{children:[" ",Object(l.jsx)("a",{href:"#contact",children:o[t].contact})," "]})]}),Object(l.jsx)(y,{}),Object(l.jsxs)("div",{className:"config",children:[Object(l.jsxs)("div",{className:"language",onClick:function(){"pt"===t?(s("eng"),i("pt/br")):(s("pt"),i("eng"))},children:[Object(l.jsx)(u.a,{icon:m.d}),Object(l.jsx)("span",{children:r})]}),Object(l.jsx)("div",{className:"adjustIcon",onClick:function(e){return O()},draggable:"false",children:Object(l.jsx)(u.a,{icon:m.e})})]})]})})},k=s(13);var C=function(){var e=Object(a.useContext)(p).Language;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{id:"Home",children:[Object(l.jsx)(w,{}),Object(l.jsxs)("div",{id:"Home-Content",children:[Object(l.jsxs)("div",{className:"intro",children:[Object(l.jsx)("h1",{children:"Gabriel P. Oliveira"}),Object(l.jsx)("h2",{children:i[e]}),Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(u.a,{icon:k.c})]})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/gabriel-97-oliveira",target:"_blank",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(u.a,{icon:k.g})]})})]}),Object(l.jsx)(f.a,{variant:"contained",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:Object(l.jsx)("a",{href:"#portfolio",style:{color:"white",fontWeight:"600",textDecoration:"none"},children:o[e].portfolio})})]}),Object(l.jsxs)("div",{class:"astro",children:[Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{}),Object(l.jsx)("span",{})]})]}),Object(l.jsx)(j,{}),Object(l.jsx)(d,{})]}),Object(l.jsx)("div",{className:"transicao"})]})},S=(s(96),s.p+"static/media/imagem.37be99e3.svg"),E=(s(97),s.p+"static/media/pdfPtBr.1dc590e1.pdf"),L={eng:{about_text:"I'm Front-End developer, with a passion in build interactives, responsiveness and friendly technologies for users. Focus on matching modern market technologies with deppling knowledge, resulting in a clean and objective code.",about_sub_text:"For more information on professional and academic background, access the resume at the button below.",button:"Resume",about:"About",resume:s.p+"static/media/pdfEng.d436f3fd.pdf"},pt:{about_text:"Eu sou um desenvolvedor Front-End, com uma paix\xe3o em construir tecnologias interativas, responsivas e amig\xe1veis para os usu\xe1rios. Focado em  combinar tecnologias modernas de mercado com conhecimento, resultando em um c\xf3digo limpo e objetivo.",about_sub_text:"Para mais informa\xe7oes de historico profissional e academico, acesse o curriculo no botao abaixo.",button:"Curriculo",about:"Sobre",resume:E}};var q=function(){var e=Object(a.useContext)(p).Language;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)("h2",{className:"title",children:L[e].about}),Object(l.jsxs)("div",{className:"aboutBody",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:S,alt:"",width:"350",className:"iconAbout"})}),Object(l.jsxs)("div",{className:"about",children:[Object(l.jsxs)("p",{className:"subText",children:[L[e].about_text,Object(l.jsx)("br",{}),L[e].about_sub_text]}),Object(l.jsx)("span",{className:"resume",children:Object(l.jsx)("a",{target:"blank",href:L[e].resume,children:Object(l.jsx)(f.a,{variant:"contained",color:"secondary",children:L[e].button})})})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"knowledge",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.i}),"React Js"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.d}),"HTML 5"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.b}),"Css 3"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.a}),"Angular"]})]}),Object(l.jsxs)("div",{className:"knowledge",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.f}),"Java Scvript"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.e}),"Java"]}),Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.h}),"Node Js"]})]})]})]})})},F=(s(98),s(71)),I=(s(99),s(153)),A=s(155),P=s(156),D=s(154);var R=function(e){var t=e.data,s=Object(a.useContext)(p).Language,c=Object(a.useState)(!1),n=Object(b.a)(c,2),r=n[0],i=n[1],o=Object(a.useState)([]),j=Object(b.a)(o,2),d=j[0],h=j[1],x=Object(a.useState)(1e3),O=Object(b.a)(x,2),g=(O[0],O[1]),v=Object(a.useRef)(),N=Object(a.useRef)(),y=function(){i(!1)};return Object(a.useEffect)((function(){h([]),t.info.technologies.forEach((function(e){h((function(t){return[].concat(Object(F.a)(t),[Object(l.jsxs)("strong",{children:[e," \xa0"]},e)])}))}))}),[t.info.technologies]),Object(a.useEffect)((function(){window.screen.width<1e3&&g(window.screen.width-50)}),[]),window.addEventListener("resize",(function(e){e.target.innerWidth<1e3?(g(e.target.innerWidth-50),e.target.innerWidth<380?N.current.style.opacity=1:N.current.style.opacity="0.3"):g(950)})),Object(l.jsxs)("div",{className:"proj",onMouseEnter:function(e){window.screen.width>380?(N.current.style.opacity=1,v.current.style.opacity=0):N.current.style.opacity=1},onMouseLeave:function(e){window.screen.width>380?(N.current.style.opacity="0.3",v.current.style.opacity=1):N.current.style.opacity=1},children:[Object(l.jsx)("div",{className:"proj-info",onClick:function(){i(!0)},s:!0,children:Object(l.jsxs)("div",{className:"proj-Card",children:[Object(l.jsx)("img",{className:"img",src:t.info.img,alt:t.info.title,ref:N}),Object(l.jsxs)("div",{ref:v,className:"projDesc",children:[Object(l.jsx)("h3",{children:t.info.title}),Object(l.jsx)("span",{children:t[s].description})]})]})}),Object(l.jsxs)(I.a,{open:r,onClose:y,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{style:{backgroundColor:"white"}},children:[Object(l.jsx)(D.a,{id:"alert-dialog-title",children:t.info.title}),Object(l.jsxs)(A.a,{children:[Object(l.jsx)(P.a,{id:"alert-dialog-description",children:t[s].function}),Object(l.jsx)(P.a,{id:"alert-dialog-description",children:t[s].features}),Object(l.jsx)("hr",{}),Object(l.jsx)("br",{}),Object(l.jsx)(P.a,{id:"alert-dialog-description",children:d})]}),Object(l.jsxs)("div",{className:"project-buttons",children:[Object(l.jsx)(f.a,{onClick:y,color:"secondary",children:Object(l.jsx)(u.a,{icon:m.g,className:"fa-2x"})}),Object(l.jsx)(f.a,{color:"primary",href:t.info.urls.visit,target:"_blank",children:Object(l.jsx)(u.a,{icon:m.b,className:"fa-2x"})}),Object(l.jsx)(f.a,{color:"primary",autoFocus:!0,href:t.info.urls.code,target:"_blank",children:Object(l.jsx)(u.a,{icon:k.c,className:"fa-2x"})})]})]})]})},M=s.p+"static/media/whatsAppClone.b5774754.jpg",_={eng:{description:Object(l.jsxs)("span",{children:["this is a ",Object(l.jsx)("span",{className:"target",children:"clone of WhatsApp"})," , which aims to simulate its applications on web pages using E-mail, obtaining ",Object(l.jsx)("span",{className:"target",children:"contacts and private groups"})," of the user."]}),function:Object(l.jsxs)("span",{className:"black",children:["having the features of ",Object(l.jsx)("span",{className:"target",children:"Registration and Login"})," , it is possible to ",Object(l.jsx)("span",{className:"target",children:"add"})," new contacts, ",Object(l.jsx)("span",{className:"target",children:"create"})," new private groups allowing those who have the ",Object(l.jsx)("span",{className:"target",children:"status of administrator"})," to ",Object(l.jsx)("span",{className:"target",children:"include and exclude"})," participants.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:"black",children:["In addition to the ",Object(l.jsx)("span",{className:"target",children:"messaging"})," functionality, we also store this information in a ",Object(l.jsx)("span",{className:"target",children:"database"}),"  that can be accessed at any time."]})]}),features:Object(l.jsxs)("span",{className:"black",children:["If you want to test the application, you can use this account:",Object(l.jsx)("br",{}),"email: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste@teste.com"})}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste"})})," ",Object(l.jsx)("br",{}),"Feel free to use your email ass well."]})},pt:{description:Object(l.jsxs)("span",{children:["Este \xe9 um ",Object(l.jsx)("span",{className:"target",children:"clone do WhatsApp"}),", que tem por objetivo replicarsuas funcionalidades em pagina web usando o Email, obtendo ",Object(l.jsx)("span",{className:"target",children:"contatos e grupos privados"})," do usuario."]}),function:Object(l.jsxs)("span",{className:"black",children:["Tendo os recursos de ",Object(l.jsx)("span",{className:"target",children:"Registro e Login"}),", \xe9 poss\xedvel ",Object(l.jsx)("span",{className:"target",children:"adicionar"}),"  novos contatos, ",Object(l.jsx)("span",{className:"target",children:"criar"})," novos grupos privados possibilitando a quem tiver o ",Object(l.jsx)("span",{className:"target",children:"status de administrador"})," a ",Object(l.jsx)("span",{className:"target",children:"inclusao e exclusao"})," de participantes. ",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:"black",children:[" Alem das funcionalidades de ",Object(l.jsx)("span",{className:"target",children:"troca de mensagens"}),", tambem armazenamos essas informa\xe7\xf5es em um ",Object(l.jsx)("span",{className:"target",children:"banco de dados"})," que poder\xe3o ser acessadas a qualquer momento."]})]}),features:Object(l.jsxs)("span",{className:"black",children:["Caso queira testar a aplica\xe7\xe3o, voc\xea pode usar esta conta:",Object(l.jsx)("br",{}),"email: ",Object(l.jsxs)("strong",{children:[" ",Object(l.jsx)("span",{children:"teste@teste.com"})]}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste"})})," ",Object(l.jsx)("br",{}),"Fique avontade para usar seu proprio email."]})},info:{title:"WhatsApp Clone",img:M,urls:{visit:"https://gabrielp-oliveira.github.io/Whatsapp-Clone/",code:"https://github.com/gabrielp-oliveira/Whatsapp-Clone",details:"#"},technologies:["Angular Js,","Angular Material UI,","Express Js,","Socket Io,","MongoDb,","Node Js."]}},J=s.p+"static/media/spotifyClone.c9a51c7d.jpg",T={eng:{description:Object(l.jsxs)("span",{children:["this is a ",Object(l.jsx)("span",{className:"target",children:"clone of spotify"})," , which aims to simulate its applications on web pages, obtaining ",Object(l.jsx)("span",{className:"target",children:"images and music"})," from the user's artist albums."]}),function:Object(l.jsxs)("span",{className:"black",children:["having user ",Object(l.jsx)("span",{className:"target",children:"authentication functionality"}),", it is possible to obtain the ",Object(l.jsx)("span",{className:"target",children:"user's"})," playlists, with their ",Object(l.jsx)("span",{className:"target",children:"music"}),",\xa0",Object(l.jsx)("span",{className:"target",children:"authors"})," and ",Object(l.jsx)("span",{className:"target",children:"albums"}),"."]}),features:Object(l.jsxs)("span",{className:"black",children:[Object(l.jsxs)("span",{children:["get the user's ",Object(l.jsx)("span",{className:"target",children:"playlist"})," with the description and tracks, "]})," ",Object(l.jsxs)("span",{children:["a ",Object(l.jsx)("span",{className:"target",children:"30 seconds preview "})," from each track from the user playlist, "]}),Object(l.jsxs)("span",{children:["Albums ",Object(l.jsx)("span",{className:"target",children:"Recently Played"})," by the user, "]}),",",Object(l.jsxs)("span",{children:["the ",Object(l.jsx)("span",{className:"target",children:"most searched artists"})," by the user."]})]})},pt:{description:Object(l.jsxs)("span",{children:["este \xe9 um ",Object(l.jsx)("span",{className:"target",children:"clone do spotify"}),", que tem por objetivo simular suas aplica\xe7oes em paginas web, obtendo ",Object(l.jsx)("span",{className:"target",children:"images e musicas"})," dos albuns e artistas do usuario."]}),function:Object(l.jsxs)("span",{className:"black",children:["possuindo as ",Object(l.jsx)("span",{className:"target",children:"funcionalidades de autentica\xe7\xe3o"})," de usuario, \xe9 possivel obter as playlists do ",Object(l.jsx)("span",{className:"target",children:"usuario"}),", com suas ",Object(l.jsx)("span",{className:"target",children:"musicas"}),",\xa0",Object(l.jsx)("span",{className:"target",children:"autores"}),"\xa0e ",Object(l.jsx)("span",{className:"target",children:"albums"}),"."]}),features:Object(l.jsxs)("span",{className:"black",children:[" ",Object(l.jsxs)("span",{children:["Retorna as ",Object(l.jsx)("span",{className:"target",children:"playlist"})," do usu\xe1rio com as descri\xe7oes e faixas."]})," ",Object(l.jsxs)("span",{children:["Uma ",Object(l.jsx)("span",{className:"target",children:"Previa de 30 segundos"})," de cada faixa da lista de reprodu\xe7\xe3o do usu\xe1rio."]})," ",Object(l.jsxs)("span",{children:["\xc1lbuns ",Object(l.jsx)("span",{className:"target",children:"reproduzidos recentemente"})," pelo usu\xe1rio."]})," ",Object(l.jsxs)("span",{children:["Os ",Object(l.jsx)("span",{className:"target",children:"artistas mais pesquisados"})," pelo usuario."]})," "]})},info:{title:"Spotify Clone",img:J,urls:{visit:"https://spotify---clone.herokuapp.com/",code:"https://github.com/gabrielp-oliveira/spotify-clone",details:"#"},technologies:["React JS,","spotify web api."]}},B=s.p+"static/media/sign.b3567de4.jpg",z={eng:{description:Object(l.jsxs)("span",{children:["this is a  ",Object(l.jsx)("span",{className:"target",children:"Jyotisha chart "}),"also known as ",Object(l.jsx)("span",{className:"target",children:"Vedic astrology "})," which is an Indian system of astrology that uses ",Object(l.jsx)("span",{className:"target",children:"Ayanamsa Lahiri"}),", being different from the traditional western astrology."]}),function:Object(l.jsxs)("span",{className:"black",children:["having the features of ",Object(l.jsx)("span",{className:"target",children:"Registration and Login  "})," it is possible to obtain the ",Object(l.jsx)("span",{className:"target",children:"user's Vedic astrology signs"}),", also store this information in a ",Object(l.jsx)("span",{className:"target",children:"database"})," that can be accessed at any time."]},"1"),features:Object(l.jsxs)("span",{className:"black",children:["If you want to test the application, you can use this account:",Object(l.jsx)("br",{}),"email: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste@teste.com"})}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste"})})," ",Object(l.jsx)("br",{}),"Feel free to use your email ass well."]})},pt:{description:Object(l.jsxs)("span",{children:["Este \xe9 um  ",Object(l.jsx)("span",{className:"target",children:"mapa Jyotisha"})," tamb\xe9m conhecido como ",Object(l.jsx)("span",{className:"target",children:"astrologia v\xe9dica"}),", que \xe9 um sistema indiano de astrologia que usa Ayanamsa Lahiri, sendo diferente da astrologia ocidental tradicional."]}),function:Object(l.jsxs)("span",{className:"black",children:["tendo os recursos de ",Object(l.jsx)("span",{className:"target",children:"Registro e Login "})," \xe9 poss\xedvel obter os ",Object(l.jsx)("span",{className:"target",children:" signos da astrologia v\xe9dica do usu\xe1rio"}),", al\xe9m de armazenar essas informa\xe7\xf5es em um ",Object(l.jsx)("span",{className:"target",children:" banco de dados"})," que pode ser acessado a qualquer momento."]},"2"),features:Object(l.jsxs)("span",{className:"black",children:["Caso queira testar a aplica\xe7\xe3o, voc\xea pode usar esta conta:",Object(l.jsx)("br",{}),"email: ",Object(l.jsxs)("strong",{children:[" ",Object(l.jsx)("span",{children:"teste@teste.com"})]}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste"})})," ",Object(l.jsx)("br",{}),"Fique avontade para usar seu proprio email."]})},info:{title:"Sign",img:B,urls:{visit:"https://gabrielp-oliveira.github.io/sign/#/sign/login",code:"https://github.com/gabrielp-oliveira/sign",details:"#"},technologies:["React JS,","React-router-dom,","Node Js,","Express Js."]}},H=s.p+"static/media/plannerImg.1608857d.jpg",W={eng:{description:Object(l.jsxs)("span",{children:["inspired in the ",Object(l.jsx)("span",{className:"target",children:"Microsoft Planner "}),", this tool helps you to ",Object(l.jsx)("span",{className:"target",children:"create"})," a ",Object(l.jsx)("span",{className:"target",children:"simple"})," and ",Object(l.jsx)("span",{className:"target",children:"visual"})," way to organize work that is updated in ",Object(l.jsx)("span",{className:"target",children:"real time "}),"for the entire team."]}),function:Object(l.jsxs)("span",{className:"black",children:["Having the features of ",Object(l.jsx)("span",{className:"target",children:"Registration and Login  "}),", solutions and task changes will be updated in ",Object(l.jsx)("span",{className:"target",children:"real time"}),",so even working remotely and concurrently with other people, the planner will update to everyone at the same time."]},"1"),features:Object(l.jsxs)("span",{className:"black",children:["If you want to test the application, you can use this account:",Object(l.jsx)("br",{}),"email: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"teste@teste.com"})}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"password"})})," ",Object(l.jsx)("br",{}),"Feel free to use your email ass well."]})},pt:{description:Object(l.jsxs)("span",{children:["inspirada no ",Object(l.jsx)("span",{className:"target",children:"Microsoft Planner"}),", esta ferramenta ajuda voc\xea a ",Object(l.jsx)("span",{className:"target",children:"criar"})," uma forma ",Object(l.jsx)("span",{className:"target",children:"simples"})," e ",Object(l.jsx)("span",{className:"target",children:"visual"})," de organizar o trabalho que \xe9 atualizado em ",Object(l.jsx)("span",{className:"target",children:"tempo real"})," para toda a equipe."]}),function:Object(l.jsxs)("span",{className:"black",children:["Tendo os recursos de ",Object(l.jsx)("span",{className:"target",children:"Registro e Login "})," as solu\xe7\xf5es e mudan\xe7as de tarefas ser\xe3o ",Object(l.jsx)("span",{className:"target",children:"atualizadas em tempo real"}),", ent\xe3o mesmo trabalhando remotamente e simultaneamente com outras pessoas, o Planner ser\xe1 atualizado para todos ao mesmo tempo"]},"2"),features:Object(l.jsxs)("span",{className:"black",children:["Caso queira testar a aplica\xe7\xe3o, voc\xea pode usar esta conta:",Object(l.jsx)("br",{}),"email: ",Object(l.jsxs)("strong",{children:[" ",Object(l.jsx)("span",{children:"teste@teste.com"})]}),Object(l.jsx)("br",{}),"password: ",Object(l.jsx)("strong",{children:Object(l.jsx)("span",{children:"password"})})," ",Object(l.jsx)("br",{}),"Fique avontade para usar seu proprio email."]})},info:{title:"Planner",img:H,urls:{visit:"https://gabrielp-oliveira.github.io/planner-task/#/",code:"https://github.com/gabrielp-oliveira/planner-task",details:"#"},technologies:["React,","Typescript,","Axios,","chart.js,","Material-ui,","Socket.io,","Express Js,","Nodemailer,","mongoose."]}},V={eng:{title:"Projects",subtext:"these and other projects are available on github."},pt:{title:"Projetos",subtext:"esses e outros projetos est\xe3o disponiveis no github."}};var U=function(){var e=Object(a.useContext)(p).Language;return Object(l.jsxs)("div",{id:"portfolio",children:[Object(l.jsxs)("div",{className:"title-port",children:[Object(l.jsx)("h2",{className:"title",children:V[e].title}),Object(l.jsx)("p",{className:"subText",children:V[e].subtext})]}),Object(l.jsxs)("div",{className:"projects",children:[Object(l.jsx)(R,{data:W}),Object(l.jsx)(R,{data:T}),Object(l.jsx)(R,{data:z}),Object(l.jsx)(R,{data:_})]})]})},Z=(s(100),{eng:{contact:"Contact",text:"Feel free to get in touch, I will return as soon as possible.",emailMessage:"Send a email.",name:"Name",subject:"subject",message:"Message",send:"Send",contactError:{title:"Error",text:Object(l.jsxs)(l.Fragment,{children:["Ops, Unexpected error. Try again later or send an email to ",Object(l.jsx)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"focus",children:"gabriel.pso100@gmail.com"})," "]})},contactSended:{title:"Message success sended !",text:"A confirmation email has been sent to your email, I will contact you as soon as possible."}},pt:{contact:"Contato",text:"fique avontade para entrar em contato, retornarei assim que possivel.",emailMessage:"Envie um email.",name:"Nome",subject:"Assunto",message:"Mensagem",send:"Enviar",contactError:{title:"Erro",text:Object(l.jsxs)(l.Fragment,{children:["Ops, Erro inesperado.Tente novamente mais tarde ou envie um email para ",Object(l.jsx)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"focus",children:"gabriel.pso100@gmail.com"})," "]})},contactSended:{title:"Mensagem enviada com sucesso!",text:"Um email de confirma\xe7\xe3o foi enviado para o seu email, entrarei em contato assim que possivel."}}}),G=s(69),K=s.n(G),$="https://portfolio--node.herokuapp.com/sendEmail";console.log($);var Q=K.a.create({baseURL:$,params:{id:localStorage.getItem("UserId")},headers:{authentication:"Bearer ".concat(localStorage.getItem("token"))}}),X=s(47),Y=s.n(X),ee=s(70);function te(){return(te=Object(ee.a)(Y.a.mark((function e(t){var s,a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mailcheck.p.rapidapi.com/?domain=".concat(t),{method:"GET",headers:{"x-rapidapi-key":"6712d624e6msh9a96536391d69d0p19f18cjsn80884fde887c","x-rapidapi-host":"mailcheck.p.rapidapi.com"}});case 2:return s=e.sent,e.next=5,s.json();case 5:if(!((a=e.sent).risk<10&&a.valid)){e.next=10;break}return e.abrupt("return",{risk:a.risk,text:"OK",reason:a.reason});case 10:throw{error:"".concat(a.text,", ").concat(a.reason)};case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se={validateForm:function(e){var t=e.current.elements[0].value.trim(),s=e.current.elements[1].value.trim(),a=e.current.elements[2].value.trim(),c=e.current.elements[3].value.trim(),n={},r=t.length>=3&&t.length<=25,i=a.length>=3,o=c.length>=3,l=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(s),j=parseInt(t),d=parseInt(s),b=parseInt(a),p=""===t||""===a||""===c||""===s;return!Number.isNaN(j)||!Number.isNaN(d)||!Number.isNaN(b)?(n.valid=!1,n.text="Error, Invalid filds.",!1):!(!(r&&i&&o&&l)||p)||(n.valid=!1,n.text="Error.",!1)},checkEmailDomain:function(e){return te.apply(this,arguments)}},ae=s(157),ce=s(124),ne=s(122),re=s(73),ie=Object(ae.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var oe=function(){var e=Object(a.useState)(),t=Object(b.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),r=Object(b.a)(n,2),i=r[0],o=r[1],j=Object(a.useContext)(p).Language,d=Object(a.useRef)(),h=ie(),x=Object(a.useState)(!1),O=Object(b.a)(x,2),g=O[0],v=O[1],N=function(){v(!0),d.current.reset(),o(!1)},y=function(){v(!1),o(!1)};return Object(l.jsxs)("div",{id:"contact",children:[Object(l.jsx)("h2",{className:"title",children:Z[j].contact}),Object(l.jsxs)("form",{className:"form",ref:d,onSubmit:function(e){o(!0),e.preventDefault();var t=d.current.elements[0].value.trim(),s=d.current.elements[1].value.trim(),a=d.current.elements[2].value.trim(),n=d.current.elements[3].value.trim();se.validateForm(d)?Q.post("/",{info:{name:t,email:s,subject:a,message:n,Language:j}}).then((function(e){e.data.error?(c(e.data.error),N()):(c(e.data.ok),N())})).catch((function(e){c(e.error),N()})):(c("Error"),N())},children:[Object(l.jsx)("span",{children:Z[j].text}),Object(l.jsxs)("div",{className:"social",children:[Object(l.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(u.a,{icon:k.c})," "]})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/gabriel-97-oliveira",target:"_blank",rel:"noreferrer",children:Object(l.jsxs)("span",{children:[Object(l.jsx)(u.a,{icon:k.g})," "]})})]}),Object(l.jsx)("p",{children:Object(l.jsxs)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"emailContact",children:[Z[j].emailMessage," ",Object(l.jsx)(u.a,{icon:m.f})]})}),Object(l.jsxs)("div",{className:"form-top",children:[Object(l.jsxs)("div",{className:"input-conteiner",children:[Object(l.jsx)("label",{htmlFor:"Name",children:Object(l.jsx)(u.a,{icon:m.h})}),Object(l.jsx)("input",{type:"text",className:"name",placeholder:Z[j].name,name:"name"})]}),Object(l.jsxs)("div",{className:"input-conteiner",children:[Object(l.jsx)("label",{htmlFor:"Email",children:Object(l.jsx)(u.a,{icon:m.c})}),Object(l.jsx)("input",{type:"text",className:"email",placeholder:"Email",name:"email"})]})]}),Object(l.jsx)("div",{className:"subject",children:Object(l.jsx)("input",{type:"text",placeholder:Z[j].subject,className:"subject-input",name:"subject"})}),Object(l.jsx)("div",{className:"message",children:Object(l.jsx)("textarea",{type:"text",placeholder:Z[j].message,name:"message"})}),Object(l.jsx)("button",{disabled:i,className:i?"disabled":"",children:Z[j].send})]}),Object(l.jsx)(ce.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:h.modal,open:g,onClose:y,closeAfterTransition:!0,BackdropComponent:ne.a,BackdropProps:{timeout:500},children:Object(l.jsx)(re.a,{in:g,children:"OK"===s?Object(l.jsxs)("div",{className:h.paper,children:[Object(l.jsx)("h2",{id:"transition-modal-title",children:Z[j].contactSended.title}),Object(l.jsx)("br",{}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{id:"transition-modal-description",children:Z[j].contactSended.text}),Object(l.jsx)(f.a,{ariant:"contained",color:"primary",onClick:y,className:"okButton",children:"Ok"})]}):Object(l.jsxs)("div",{className:h.paper,children:[Object(l.jsx)("h2",{id:"transition-modal-title",children:Z[j].contactError.title}),Object(l.jsx)("br",{}),s,Object(l.jsx)("hr",{}),Object(l.jsx)("p",{id:"transition-modal-description",children:Z[j].contactError.text}),Object(l.jsx)(f.a,{ariant:"contained",color:"primary",onClick:y,className:"okButton",children:"Ok"})]})})})]})},le=(s(119),{eng:{footer:Object(l.jsxs)("span",{children:["Designed & Developed by ",Object(l.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",children:"Gabriel P. Oliveira"})]})},pt:{footer:Object(l.jsxs)("span",{children:["Desenhado & Desenvolvido por ",Object(l.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",rel:"noreferrer",children:"Gabriel P. Oliveira"})]})}});var je=function(){var e=Object(a.useContext)(p).Language;return Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"box",children:Object(l.jsxs)("span",{children:["\xa92021 - ",le[e].footer," "]})})})};var de=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(C,{}),Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"body-conteiner",children:[Object(l.jsx)(q,{}),Object(l.jsx)(U,{}),Object(l.jsx)(oe,{})]})}),Object(l.jsx)(je,{})]})},be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,161)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),a(e),c(e),n(e),r(e)}))};r.a.render(Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{children:Object(l.jsx)(de,{})})}),document.getElementById("root")),be()},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){},93:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[120,1,2]]]);
//# sourceMappingURL=main.ab10ca1d.chunk.js.map