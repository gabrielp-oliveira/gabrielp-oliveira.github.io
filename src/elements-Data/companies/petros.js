import React from "react";
import img from "../../assets/imgs/petros.png";
import companyStyle from "./companyStyle.module.css";

function DetailsEng() {
  return (
    <>
      client:
      <div className={companyStyle.container}>
        <div>
          <p>
            • support in the development and maintenance of the web team's
            existing full-stack systems.
          </p>
          <p>• support in update old projects with new technologies.</p>
          <p>• participation in the creation of new pages and services</p>
          <p>Contact me for more Details.</p>
        </div>
      </div>
    </>
  );
}
function DetailsPtBr() {
  return (
    <>
      cliente:
      <div className={companyStyle.container}>
        <div>
          <p>• suporte no desenvolvimento e manutenção de projetos da equipe web sistemas full-stack existentes.</p>
          <p>• suporte na atualização de projetos antigos com novas tecnologias.</p>
          <p>• participação na criação de novas páginas e serviços.</p>
          <p>Contate-me para mais detalhes.</p>
        </div>
      </div>
    </>
  );
}

export default {
  eng: {
    name: "petros",
    date: "04-2021 to 10-2021 ",
    detail: <DetailsEng></DetailsEng>,
    textTop:
      "Petros - Petrobras Social Security Foundation. the second largest pension fund in Brazil.",
    text: "full-stack developer - Angular, JQuery, JavaScript and Java",
  },
  pt: {
    name: "petros",
    detail: <DetailsPtBr></DetailsPtBr>,
    date: "04-2021 ate 10-2021 ",
    textTop:
      "Petros - Fundação Petrobras de Seguridade Social. o segundo maior fundo de pensão do Brasil.",
    text: "full-stack developer - Angular, JQuery, JavaScript e Java",
  },
  info: {
    img: img,
    linkedin:
      "https://br.linkedin.com/company/petros-funda%C3%A7%C3%A3o-petrobras-de-seguridade-social",
    website: "https://www.petros.com.br/",
  },
};
