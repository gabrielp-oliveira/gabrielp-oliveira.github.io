(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t){e.exports={validateForm:function(e){var t=e.current.elements[0].value.trim(),a=e.current.elements[1].value.trim(),s=e.current.elements[2].value.trim(),c=e.current.elements[3].value.trim(),n={},i=t.length>=3&&t.length<=25,r=s.length>=3,o=c.length>=3,l=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(a),j=parseInt(t),d=parseInt(a),b=parseInt(s),h=""===t||""===s||""===c||""===a;return!Number.isNaN(j)||!Number.isNaN(d)||!Number.isNaN(b)?(console.log("number"),n.valid=!1,n.text="Error, Invalid filds.",!1):!(!(i&&r&&o&&l)||h)||(n.valid=!1,n.text="Error.",!1)},checkEmailDomain:function(e){return fetch("https://mailcheck.p.rapidapi.com/?domain=".concat(e),{method:"GET",headers:{"x-rapidapi-key":"6712d624e6msh9a96536391d69d0p19f18cjsn80884fde887c","x-rapidapi-host":"mailcheck.p.rapidapi.com"}}).then((function(e){return e.json()})).then((function(e){if(e.risk<10&&e.valid)return{risk:e.risk,text:"OK",reason:e.reason};throw{error:"".concat(e.text,", ").concat(e.reason)}}))}}},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},81:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),n=a(8),i=a.n(n),r=(a(70),a(71),{pt:"Desenvolvedor Front-End",eng:"Front-End Developer"}),o=(a(72),a(0));var l=function(){return Object(o.jsx)("div",{className:"custom-shape-divider-bottom-1613724039",children:Object(o.jsxs)("svg",{"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 120",preserveAspectRatio:"none",children:[Object(o.jsx)("path",{fill:"white",d:"M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",opacity:".25",className:"shape-fill"}),Object(o.jsx)("path",{fill:"white",d:"M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",opacity:".5",className:"shape-fill"}),Object(o.jsx)("path",{fill:"white",d:"M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",className:"shape-fill"})]})})};a(74);var j=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{}),Object(o.jsx)("i",{})]})},d=a(14),b=(a(75),{eng:{home:"Home",about:"About",portfolio:"Portfolio",contact:"Contact",ariaLabel:"navigation button of the header."},pt:{home:"Inicio",about:"Sobre",portfolio:"Projetos",contact:"Contato",ariaLabel:"Botao de navega\xe7\xe3o do cabe\xe7alho."}}),h=Object(s.createContext)({});function m(e){var t=e.children,a=Object(s.useState)("eng"),c=Object(d.a)(a,2),n=c[0],i=c[1];return Object(o.jsx)(h.Provider,{value:{Language:n,SetLanguage:i},children:t})}var p=a(7),u=a(18),x=a(37),g=a(43),O=(a(81),a(131)),f=a(130),v=a(132),N=a(124);function y(){var e,t=Object(s.useContext)(h),a=t.Language,n=t.SetLanguage,i=c.a.useState({left:!1}),r=Object(d.a)(i,2),l=r[0],j=r[1],m=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&j(Object(g.a)(Object(g.a)({},l),{},Object(x.a)({},e,t)))}};return Object(s.useEffect)((function(){"eng"===navigator.language?n("eng"):n("pt")}),[]),Object(o.jsxs)("div",{className:"bars",children:[Object(o.jsx)(f.a,{onClick:m("left",!0),"aria-label":b[a].ariaLabel,children:Object(o.jsx)(p.a,{icon:u.a,color:"white"})}),Object(o.jsx)(O.a,{open:l.left,onClose:m("left",!1),onOpen:m("left",!0),children:(e="left",Object(o.jsxs)("div",{className:"list",role:"presentation",onClick:m(e,!1),onKeyDown:m(e,!1),children:[Object(o.jsx)(v.a,{children:Object(o.jsxs)("div",{className:"SideNav",children:[Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#Home",children:b[a].home})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#about-conteiner",children:b[a].about})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#portfolio",children:b[a].portfolio})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#contact",children:b[a].contact})," "]})]})}),Object(o.jsx)(N.a,{})]}))})]})}var k=function(){var e=Object(s.useContext)(h),t=e.Language,a=e.SetLanguage,c=Object(s.useState)(),n=Object(d.a)(c,2),i=n[0],r=n[1],l=Object(s.useState)("Light"),j=Object(d.a)(l,2),m=j[0],x=j[1];function g(){var e=document.querySelector("#Home"),t=document.documentElement,a=document.querySelector(".adjustIcon"),s=document.querySelector(".form"),c=document.querySelector(".body-conteiner"),n=document.querySelector(".transicao");"Dark"===m?(t.style.cssText="--Dark: rgb(133, 96, 2)",t.style.cssText="--Body: rgb(255, 255, 255)",e.style.background="linear-gradient(135deg, rgba(238,174,212,1) 0%, rgba(116,116,221,1) 100%)",a.style.filter="none",s.style.background="rgb(0, 0, 0, 0.2)",c.style.background="rgb(0, 0, 0, 0.2)",n.style.background="linear-gradient(0deg, rgb(255,255,255) 0%, var(--Dark) 100%)",x("Light")):(t.style.cssText="--Dark: rgb(5, 0, 32)",e.style.background="linear-gradient(190deg, rgb(52, 11, 68) 35%, rgb(2, 53, 63) 100%)",a.style.filter="invert()",s.style.background="rgb(255, 255, 255, 0.1)",c.style.background="rgb(255, 255, 255, 0.02)",n.style.background=" linear-gradient(0deg, rgb(5, 5, 5) 20%, var(--Dark)100%)",x("Dark"))}return Object(s.useEffect)((function(){"pt"===navigator.language?(a("pt"),r("eng")):(a("eng"),r("pt/br")),g()}),[]),Object(o.jsx)("div",{className:"navHeader-Container",children:Object(o.jsxs)("div",{className:"navHeader",children:[Object(o.jsxs)("div",{className:"navBar",children:[Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#Home",children:b[t].home})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#about-conteiner",children:b[t].about})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#portfolio",children:b[t].portfolio})]}),Object(o.jsxs)("span",{children:[" ",Object(o.jsx)("a",{href:"#contact",children:b[t].contact})," "]})]}),Object(o.jsx)(y,{}),Object(o.jsxs)("div",{className:"config",children:[Object(o.jsxs)("div",{className:"language",onClick:function(){"pt"===t?(a("eng"),r("pt/br")):(a("pt"),r("eng"))},children:[Object(o.jsx)(p.a,{icon:u.d}),Object(o.jsx)("span",{children:i})]}),Object(o.jsx)("div",{className:"adjustIcon",onClick:function(e){return g()},draggable:"false",children:Object(o.jsx)(p.a,{icon:u.e})})]})]})})},w=a(13);var C=function(){var e=Object(s.useContext)(h).Language;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"Home",children:[Object(o.jsx)(k,{}),Object(o.jsx)("div",{id:"Home-Content",children:Object(o.jsxs)("div",{className:"intro",children:[Object(o.jsx)("h1",{children:"Gabriel P. Oliveira"}),Object(o.jsx)("h2",{children:r[e]}),Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",children:Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(p.a,{icon:w.c})]})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/gabriel-97-oliveira",target:"_blank",children:Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(p.a,{icon:w.g})]})})]})]})}),Object(o.jsx)(l,{}),Object(o.jsx)(j,{})]}),Object(o.jsx)("div",{className:"transicao"})]})},S=(a(84),a.p+"static/media/imagem.37be99e3.svg"),E=(a(85),a.p+"static/media/pdfPtBr.385a8b88.pdf"),L={eng:{about_text:"I'm Front-End developer, with a passion in build interactives, responsiveness and friendly technologies for users. Focus on matching modern market technologies with deppling knowledge, resulting in a clean and objective code.",about_sub_text:"For more information on professional and academic background, access the resume at the button below.",button:"Resume",about:"About",resume:a.p+"static/media/pdfEng.1543fa27.pdf"},pt:{about_text:"Eu sou um desenvolvedor Front-End, com uma paix\xe3o em construir tecnologias interativas, responsivas e amig\xe1veis para os usu\xe1rios. Focado em  combinar tecnologias modernas de mercado com conhecimento, resultando em um c\xf3digo limpo e objetivo.",about_sub_text:"Para mais informa\xe7oes de historico profissional e academico, acesse o curriculo no botao abaixo.",button:"Curriculo",about:"Sobre",resume:E}};var F=function(){var e=Object(s.useContext)(h).Language;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"about-conteiner",children:[Object(o.jsx)("h2",{className:"title",children:L[e].about}),Object(o.jsxs)("div",{className:"aboutBody",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:S,alt:"",width:"350",className:"iconAbout"})}),Object(o.jsxs)("div",{className:"about",children:[Object(o.jsxs)("p",{className:"subText",children:[L[e].about_text,Object(o.jsx)("br",{}),L[e].about_sub_text]}),Object(o.jsx)("span",{className:"resume",children:Object(o.jsx)("a",{target:"blank",href:L[e].resume,children:Object(o.jsx)(f.a,{variant:"contained",color:"secondary",children:L[e].button})})})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"knowledge",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.i}),"React Js"]}),Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.d}),"HTML 5"]}),Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.b}),"Css 3"]}),Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.a}),"Angular"]})]}),Object(o.jsxs)("div",{className:"knowledge",children:[Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.f}),"Java Scvript"]}),Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.e}),"Java"]}),Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.h}),"Node Js"]})]})]})]})})},q=(a(86),a(57)),A=(a(87),a(125)),D=a(127),P=a(128),_=a(126);var M=function(e){var t=e.data,a=Object(s.useContext)(h).Language,c=Object(s.useState)(!1),n=Object(d.a)(c,2),i=n[0],r=n[1],l=Object(s.useState)([]),j=Object(d.a)(l,2),b=j[0],m=j[1],x=Object(s.useState)(1e3),g=Object(d.a)(x,2),O=g[0],v=g[1],N=Object(s.useRef)(),y=Object(s.useRef)(),k=function(){r(!1)};return Object(s.useEffect)((function(){t.info.technologies.forEach((function(e){m((function(t){return[].concat(Object(q.a)(t),[Object(o.jsxs)("strong",{children:[e," \xa0"]},e)])}))}))}),[t.info.technologies]),Object(s.useEffect)((function(){window.screen.width<1e3&&v(window.screen.width-50),console.log(O)}),[]),window.addEventListener("resize",(function(e){e.target.innerWidth<1e3?(v(e.target.innerWidth-50),e.target.innerWidth<380?y.current.style.opacity=1:y.current.style.opacity="0.3"):(v(950),console.log("?"))})),Object(o.jsxs)("div",{className:"proj",onMouseEnter:function(e){window.screen.width>380?(y.current.style.opacity=1,N.current.style.opacity=0):y.current.style.opacity=1},onMouseLeave:function(e){window.screen.width>380?(y.current.style.opacity="0.3",N.current.style.opacity=1):y.current.style.opacity=1},children:[Object(o.jsx)("div",{className:"proj-info",onClick:function(){r(!0)},s:!0,children:Object(o.jsxs)("div",{className:"proj-Card",children:[Object(o.jsx)("img",{className:"img",src:t.info.img,alt:t.info.title,ref:y}),Object(o.jsxs)("div",{ref:N,className:"projDesc",children:[Object(o.jsx)("h3",{children:t.info.title}),Object(o.jsx)("span",{children:t[a].description})]})]})}),Object(o.jsxs)(A.a,{open:i,onClose:k,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",PaperProps:{style:{backgroundColor:"white"}},children:[Object(o.jsx)(_.a,{id:"alert-dialog-title",children:t.info.title}),Object(o.jsxs)(D.a,{children:[Object(o.jsx)(P.a,{id:"alert-dialog-description",children:t[a].function}),Object(o.jsx)("br",{}),Object(o.jsx)(P.a,{id:"alert-dialog-description",children:t[a].features}),Object(o.jsx)("hr",{}),Object(o.jsx)("br",{}),Object(o.jsx)(P.a,{id:"alert-dialog-description",children:b})]}),Object(o.jsxs)("div",{className:"project-buttons",children:[Object(o.jsx)(f.a,{onClick:k,color:"secondary",children:Object(o.jsx)(p.a,{icon:u.g,className:"fa-2x"})}),Object(o.jsx)(f.a,{color:"primary",href:t.info.urls.visit,target:"_blank",children:Object(o.jsx)(p.a,{icon:u.b,className:"fa-2x"})}),Object(o.jsx)(f.a,{color:"primary",autoFocus:!0,href:t.info.urls.code,target:"_blank",children:Object(o.jsx)(p.a,{icon:w.c,className:"fa-2x"})})]})]})]})},R=a.p+"static/media/whatsAppClone.b5774754.jpg",I={eng:{description:Object(o.jsxs)("span",{children:["this is a ",Object(o.jsx)("span",{className:"target",children:"clone of WhatsApp"})," , which aims to simulate its applications on web pages using E-mail, obtaining ",Object(o.jsx)("span",{className:"target",children:"contacts and private groups"})," of the user."]}),function:Object(o.jsxs)("span",{className:"black",children:["having the features of ",Object(o.jsx)("span",{className:"target",children:"Registration and Login"})," , it is possible to ",Object(o.jsx)("span",{className:"target",children:"add"})," new contacts, ",Object(o.jsx)("span",{className:"target",children:"create"})," new private groups allowing those who have the ",Object(o.jsx)("span",{className:"target",children:"status of administrator"})," to ",Object(o.jsx)("span",{className:"target",children:"include and exclude"})," participants."]}),features:Object(o.jsxs)("span",{children:["in addition to the ",Object(o.jsx)("span",{className:"target",children:"messaging"})," functionality, we also store this information in a ",Object(o.jsx)("span",{className:"target",children:"database"}),"  that can be accessed at any time."]})},pt:{description:Object(o.jsxs)("span",{children:["este \xe9 um ",Object(o.jsx)("span",{className:"target",children:"clone do WhatsApp"}),", que tem por objetivo replicarsuas funcionalidades em pagina web usando o Email, obtendo ",Object(o.jsx)("span",{className:"target",children:"contatos e grupos privados"})," do usuario."]}),function:Object(o.jsxs)("span",{className:"black",children:["tendo os recursos de ",Object(o.jsx)("span",{className:"target",children:"Registro e Login"}),", \xe9 poss\xedvel ",Object(o.jsx)("span",{className:"target",children:"adicionar"}),"  novos contatos, ",Object(o.jsx)("span",{className:"target",children:"criar"})," novos grupos privados possibilitando a quem tiver o ",Object(o.jsx)("span",{className:"target",children:"status de administrador"})," a ",Object(o.jsx)("span",{className:"target",children:"inclusao e exclusao"})," de participantes."]}),features:Object(o.jsxs)("span",{children:[" alem das funcionalidades de ",Object(o.jsx)("span",{className:"target",children:"troca de mensagens"}),", tambem armazenamos essas informa\xe7\xf5es em um ",Object(o.jsx)("span",{className:"target",children:"banco de dados"})," que poder\xe3o ser acessadas a qualquer momento."]})},info:{title:"WhatsApp Clone",img:R,urls:{visit:"https://gabrielp-oliveira.github.io/Whatsapp-Clone/",code:"https://github.com/gabrielp-oliveira/Whatsapp-Clone",details:"#"},technologies:["Angular Js,","Angular Material UI,","Express Js,","Socket Io,","MongoDb,","Node Js."]}},J=a.p+"static/media/spotifyClone.c9a51c7d.jpg",T={eng:{description:Object(o.jsxs)("span",{children:["this is a ",Object(o.jsx)("span",{className:"target",children:"clone of spotify"})," , which aims to simulate its applications on web pages, obtaining ",Object(o.jsx)("span",{className:"target",children:"images and music"})," from the user's artist albums."]}),function:Object(o.jsxs)("span",{className:"black",children:["having user ",Object(o.jsx)("span",{className:"target",children:"authentication functionality"}),", it is possible to obtain the ",Object(o.jsx)("span",{className:"target",children:"user's"})," playlists, with their ",Object(o.jsx)("span",{className:"target",children:"music"}),",\xa0",Object(o.jsx)("span",{className:"target",children:"authors"})," and ",Object(o.jsx)("span",{className:"target",children:"albums"}),"."]}),features:Object(o.jsxs)("span",{children:[Object(o.jsxs)("span",{children:["get the user's ",Object(o.jsx)("span",{className:"target",children:"playlist"})," with the description and tracks, "]})," ",Object(o.jsxs)("span",{children:["a ",Object(o.jsx)("span",{className:"target",children:"30 seconds preview "})," from each track from the user playlist, "]}),Object(o.jsxs)("span",{children:["Albums ",Object(o.jsx)("span",{className:"target",children:"Recently Played"})," by the user, "]}),",",Object(o.jsxs)("span",{children:["the ",Object(o.jsx)("span",{className:"target",children:"most searched artists"})," by the user."]})]})},pt:{description:Object(o.jsxs)("span",{children:["este \xe9 um ",Object(o.jsx)("span",{className:"target",children:"clone do spotify"}),", que tem por objetivo simular suas aplica\xe7oes em paginas web, obtendo ",Object(o.jsx)("span",{className:"target",children:"images e musicas"})," dos albuns e artistas do usuario."]}),function:Object(o.jsxs)("span",{className:"black",children:["possuindo as ",Object(o.jsx)("span",{className:"target",children:"funcionalidades de autentica\xe7\xe3o"})," de usuario, \xe9 possivel obter as playlists do ",Object(o.jsx)("span",{className:"target",children:"usuario"}),", com suas ",Object(o.jsx)("span",{className:"target",children:"musicas"}),",\xa0",Object(o.jsx)("span",{className:"target",children:"autores"}),"\xa0e ",Object(o.jsx)("span",{className:"target",children:"albums"}),"."]}),features:Object(o.jsxs)("span",{children:[" ",Object(o.jsxs)("span",{children:["Retorna as ",Object(o.jsx)("span",{className:"target",children:"playlist"})," do usu\xe1rio com as descri\xe7oes e faixas."]})," ",Object(o.jsxs)("span",{children:["Uma ",Object(o.jsx)("span",{className:"target",children:"Previa de 30 segundos"})," de cada faixa da lista de reprodu\xe7\xe3o do usu\xe1rio."]})," ",Object(o.jsxs)("span",{children:["\xc1lbuns ",Object(o.jsx)("span",{className:"target",children:"reproduzidos recentemente"})," pelo usu\xe1rio."]})," ",Object(o.jsxs)("span",{children:["Os ",Object(o.jsx)("span",{className:"target",children:"artistas mais pesquisados"})," pelo usuario."]})," "]})},info:{title:"Spotify Clone",img:J,urls:{visit:"https://spotify---clone.herokuapp.com/",code:"https://github.com/gabrielp-oliveira/spotify-clone",details:"#"},technologies:["React JS,","spotify web api."]}},B=a.p+"static/media/sign.b3567de4.jpg",z={eng:{description:Object(o.jsxs)("span",{children:["this is a  ",Object(o.jsx)("span",{className:"target",children:"Jyotisha chart "}),"also known as ",Object(o.jsx)("span",{className:"target",children:"Vedic astrology "})," which is an Indian system of astrology that uses ",Object(o.jsx)("span",{className:"target",children:"Ayanamsa Lahiri"}),", being different from the traditional western astrology."]}),function:Object(o.jsxs)("span",{className:"black",children:["having the features of ",Object(o.jsx)("span",{className:"target",children:"Registration and Login  "})," it is possible to obtain the ",Object(o.jsx)("span",{className:"target",children:"user's Vedic astrology signs"}),", also store this information in a ",Object(o.jsx)("span",{className:"target",children:"database"})," that can be accessed at any time."]},"1"),features:""},pt:{description:Object(o.jsxs)("span",{children:["Este \xe9 um  ",Object(o.jsx)("span",{className:"target",children:"mapa Jyotisha"})," tamb\xe9m conhecido como ",Object(o.jsx)("span",{className:"target",children:"astrologia v\xe9dica"}),", que \xe9 um sistema indiano de astrologia que usa Ayanamsa Lahiri, sendo diferente da astrologia ocidental tradicional."]}),function:Object(o.jsxs)("span",{className:"black",children:["tendo os recursos de ",Object(o.jsx)("span",{className:"target",children:"Registro e Login "})," \xe9 poss\xedvel obter os ",Object(o.jsx)("span",{className:"target",children:" signos da astrologia v\xe9dica do usu\xe1rio"}),", al\xe9m de armazenar essas informa\xe7\xf5es em um ",Object(o.jsx)("span",{className:"target",children:" banco de dados"})," que pode ser acessado a qualquer momento."]},"2"),features:""},info:{title:"Sign",img:B,urls:{visit:"https://gabrielp-oliveira.github.io/sign/#/sign/login",code:"https://github.com/gabrielp-oliveira/sign",details:"#"},technologies:["React JS,","React-router-dom,","Node Js,","Express Js."]}},H=a.p+"static/media/plannerImg.1608857d.jpg",V={eng:{description:Object(o.jsxs)("span",{children:["inspired in the ",Object(o.jsx)("span",{className:"target",children:"Microsoft Planner "}),", this tool helps you to ",Object(o.jsx)("span",{className:"target",children:"create"})," a ",Object(o.jsx)("span",{className:"target",children:"simple"})," and ",Object(o.jsx)("span",{className:"target",children:"visual"})," way to organize work that is updated in ",Object(o.jsx)("span",{className:"target",children:"real time "}),"for the entire team."]}),function:Object(o.jsxs)("span",{className:"black",children:["having the features of ",Object(o.jsx)("span",{className:"target",children:"Registration and Login  "}),", solutions and task changes will be updated in ",Object(o.jsx)("span",{className:"target",children:"real time"}),",so even working remotely and concurrently with other people, the planner will update to everyone at the same time."]},"1"),features:""},pt:{description:Object(o.jsxs)("span",{children:["inspirada no ",Object(o.jsx)("span",{className:"target",children:"Microsoft Planner"}),", esta ferramenta ajuda voc\xea a ",Object(o.jsx)("span",{className:"target",children:"criar"})," uma forma ",Object(o.jsx)("span",{className:"target",children:"simples"})," e ",Object(o.jsx)("span",{className:"target",children:"visual"})," de organizar o trabalho que \xe9 atualizado em ",Object(o.jsx)("span",{className:"target",children:"tempo real"})," para toda a equipe."]}),function:Object(o.jsxs)("span",{className:"black",children:["tendo os recursos de ",Object(o.jsx)("span",{className:"target",children:"Registro e Login "})," as solu\xe7\xf5es e mudan\xe7as de tarefas ser\xe3o ",Object(o.jsx)("span",{className:"target",children:"atualizadas em tempo real"}),", ent\xe3o mesmo trabalhando remotamente e simultaneamente com outras pessoas, o Planner ser\xe1 atualizado para todos ao mesmo tempo"]},"2"),features:""},info:{title:"Planner",img:H,urls:{visit:"https://gabrielp-oliveira.github.io/planner-task/#/",code:"https://github.com/gabrielp-oliveira/planner-task",details:"#"},technologies:["React,","Typescript,","Axios,","chart.js,","Material-ui,","Socket.io,","Express Js,","Nodemailer,","mongoose."]}},W={eng:{title:"Projects",subtext:"these and other projects are available on github."},pt:{title:"Projetos",subtext:"esses e outros projetos est\xe3o disponiveis no github."}};var G=function(){var e=Object(s.useContext)(h).Language;return Object(o.jsxs)("div",{id:"portfolio",children:[Object(o.jsxs)("div",{className:"title-port",children:[Object(o.jsx)("h2",{className:"title",children:W[e].title}),Object(o.jsx)("p",{className:"subText",children:W[e].subtext})]}),Object(o.jsxs)("div",{className:"projects",children:[Object(o.jsx)(M,{data:V}),Object(o.jsx)(M,{data:T}),Object(o.jsx)(M,{data:z}),Object(o.jsx)(M,{data:I})]})]})},Z=(a(88),{eng:{contact:"Contact",text:"Feel free to get in touch, I will return as soon as possible.",emailMessage:"Send a email.",name:"Name",subject:"subject",message:"Message",send:"Send",contactError:{title:"Error",text:Object(o.jsxs)(o.Fragment,{children:["Ops, Unexpected error. Try again later or send an email to ",Object(o.jsx)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"focus",children:"gabriel.pso100@gmail.com"})," "]})},contactSended:{title:"Message success sended !",text:"A confirmation email has been sent to your email, I will contact you as soon as possible."}},pt:{contact:"Contato",text:"fique avontade para entrar em contato, retornarei assim que possivel.",emailMessage:"Envie um email.",name:"Nome",subject:"Assunto",message:"Mensagem",send:"Enviar",contactError:{title:"Erro",text:Object(o.jsxs)(o.Fragment,{children:["Ops, Erro inesperado.Tente novamente mais tarde ou envie um email para ",Object(o.jsx)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"focus",children:"gabriel.pso100@gmail.com"})," "]})},contactSended:{title:"Mensagem enviada com sucesso!",text:"Um email de confirma\xe7\xe3o foi enviado para o seu email, entrarei em contato assim que possivel."}}}),U=a(56),K=a.n(U),X=a(44),Y=a(129),$=a(96),Q=a(94),ee=a(59),te=Object(Y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var ae=function(){var e=Object(s.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),i=Object(d.a)(n,2),r=i[0],l=i[1],j=Object(s.useContext)(h).Language,b=Object(s.useRef)(),m=te(),x=Object(s.useState)(!1),g=Object(d.a)(x,2),O=g[0],v=g[1],N=function(){v(!0),b.current.reset(),l(!1)},y=function(){v(!1),l(!1)};return Object(o.jsxs)("div",{id:"contact",children:[Object(o.jsx)("h2",{className:"title",children:Z[j].contact}),Object(o.jsxs)("form",{className:"form",ref:b,onSubmit:function(e){l(!0),e.preventDefault();var t=b.current.elements[1].value.trim();Object(X.validateForm)(b)?Object(X.checkEmailDomain)(t).then((function(){K.a.sendForm("service_b0s1exi","template_ligchui",e.target,"user_DrwBjlIwYadcDMGjXRcgX").then((function(e){console.log(e),c(e.text),N()})).catch((function(e){console.log(e),c(e.error),N()}))})).catch((function(e){console.log(e),c(e.error),N()})):(console.log("form invalido"),c("Error"),N())},children:[Object(o.jsx)("span",{children:Z[j].text}),Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(p.a,{icon:w.c})," "]})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/gabriel-97-oliveira",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)("span",{children:[Object(o.jsx)(p.a,{icon:w.g})," "]})})]}),Object(o.jsx)("p",{children:Object(o.jsxs)("a",{href:"mailto:gabriel.pso100@gmail.com",className:"emailContact",children:[Z[j].emailMessage," ",Object(o.jsx)(p.a,{icon:u.f})]})}),Object(o.jsxs)("div",{className:"form-top",children:[Object(o.jsxs)("div",{className:"input-conteiner",children:[Object(o.jsx)("label",{htmlFor:"Name",children:Object(o.jsx)(p.a,{icon:u.h})}),Object(o.jsx)("input",{type:"text",className:"name",placeholder:Z[j].name,name:"name"})]}),Object(o.jsxs)("div",{className:"input-conteiner",children:[Object(o.jsx)("label",{htmlFor:"Email",children:Object(o.jsx)(p.a,{icon:u.c})}),Object(o.jsx)("input",{type:"text",className:"email",placeholder:"Email",name:"email"})]})]}),Object(o.jsx)("div",{className:"subject",children:Object(o.jsx)("input",{type:"text",placeholder:Z[j].subject,className:"subject-input",name:"subject"})}),Object(o.jsx)("div",{className:"message",children:Object(o.jsx)("textarea",{type:"text",placeholder:Z[j].message,name:"message"})}),Object(o.jsx)("button",{disabled:r,className:r?"disabled":"",children:Z[j].send})]}),Object(o.jsx)($.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:m.modal,open:O,onClose:y,closeAfterTransition:!0,BackdropComponent:Q.a,BackdropProps:{timeout:500},children:Object(o.jsx)(ee.a,{in:O,children:"OK"===a?Object(o.jsxs)("div",{className:m.paper,children:[Object(o.jsx)("h2",{id:"transition-modal-title",children:Z[j].contactSended.title}),Object(o.jsx)("br",{}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{id:"transition-modal-description",children:Z[j].contactSended.text}),Object(o.jsx)(f.a,{ariant:"contained",color:"primary",onClick:y,className:"okButton",children:"Ok"})]}):Object(o.jsxs)("div",{className:m.paper,children:[Object(o.jsx)("h2",{id:"transition-modal-title",children:Z[j].contactError.title}),Object(o.jsx)("br",{}),a,Object(o.jsx)("hr",{}),Object(o.jsx)("p",{id:"transition-modal-description",children:Z[j].contactError.text}),Object(o.jsx)(f.a,{ariant:"contained",color:"primary",onClick:y,className:"okButton",children:"Ok"})]})})})]})},se=(a(91),{eng:{footer:Object(o.jsxs)("span",{children:["Designed & Developed by ",Object(o.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",children:"Gabriel P. Oliveira"})]})},pt:{footer:Object(o.jsxs)("span",{children:["Desenhado & Desenvolvido por ",Object(o.jsx)("a",{href:"https://github.com/gabrielp-oliveira",target:"_blank",rel:"noreferrer",children:"Gabriel P. Oliveira"})]})}});var ce=function(){var e=Object(s.useContext)(h).Language;return Object(o.jsx)("footer",{children:Object(o.jsx)("div",{className:"box",children:Object(o.jsxs)("span",{children:["\xa92021 - ",se[e].footer," "]})})})};var ne=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(C,{}),Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"body-conteiner",children:[Object(o.jsx)(F,{}),Object(o.jsx)(G,{}),Object(o.jsx)(ae,{})]})}),Object(o.jsx)(ce,{})]})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,133)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(m,{children:Object(o.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[92,1,2]]]);
//# sourceMappingURL=main.eeb894e3.chunk.js.map