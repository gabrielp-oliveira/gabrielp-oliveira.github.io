import React from "react";
import img from "../../assets/imgs/petros.png";
import companyStyle from "./companyStyle.module.css";

function Details() {
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

export default {
  eng: {
    name: "petros",
    date: "04-2021 to 10-2021 ",
    detail: <Details></Details>,
    textTop:
      "Petros - Petrobras Social Security Foundation. the second largest pension fund in Brazil.",
    text: "full-stack developer - Angular, JQuery, JavaScript and Java",
  },
  pt: {
    name: "petros",
    detail: <Details></Details>,
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
