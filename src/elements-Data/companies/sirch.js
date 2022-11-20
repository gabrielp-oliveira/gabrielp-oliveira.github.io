import React from "react";
import img from "../../assets/imgs/sirch.png";
import sirchexample from "../../assets/imgs/sirchExample.png";
import companyStyle from "./companyStyle.module.css";

function DetailsEng() {
  return (
    <>
      <div className={companyStyle.container}>
        <img src={sirchexample} height="220px"></img>
        <div>
          <p>
            • Developing a modern way to search and find data in internet, using
            modern framework like ReactJS to solve google extensions issues.
          </p>
          <p>
            • Applying UI concepts to get the more precise design as possible,
            using figma tools as reference.
          </p>
          <p>
            • Using technologies like SupaBase to authenticate users and let
            them access the correct data.
          </p>
          <p>Contact me for more Details.</p>
        </div>
      </div>
    </>
  );
}
function DetailsPtBr() {
  return (
    <>
      <div className={companyStyle.container}>
        <img src={sirchexample} height="220px"></img>
        <div>
          <p>
            • Desenvolvendo uma maneira moderna de pesquisar e encontrar dados na internet, usando
              frameworks modernos para resolver problemas de authenticacao.
          </p>
          <p>
            • Aplicando conceitos de interface do usuário para obter o design mais preciso possível,
              usando ferramentas figma como referência.
          </p>
          <p>
            • Usando tecnologias como SupaBase para autenticar usuários e permitir
             acessam os dados corretos.
          </p>
          <p>Contate-me para mais detalhes.</p>
        </div>
      </div>
    </>
  );
}

export default {
  eng: {
    name: "Sirch",
    date: "02-2022 to 05-2022 ",
    textTop: "Sirch - Your search engine Reimagined.",
    text: "Front-end developer - React js and Javascript",
    detail: <DetailsEng />,
  },
  pt: {
    name: "Sirch",
    date: "02-2022 ate 05-2022 ",
    textTop: "Sirch - Sua ferramenta de busca Reimaginada.",
    text: "Front-end developer - React js e Javascript",
    detail: <DetailsPtBr />,
  },
  info: {
    img: img,
    website: "https://sirch.org/",
    linkedin: "https://www.linkedin.com/company/sirchmyway",
  },
};
