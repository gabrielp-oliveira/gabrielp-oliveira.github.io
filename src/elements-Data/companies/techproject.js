import React from "react";
import img from "../../assets/imgs/techProject-Logo.png";
import CnS from "../../assets/imgs/C&S.png";
import companyStyle from "./companyStyle.module.css";

function DetailsEng() {
  return (
    <>
      client:
      <div className={companyStyle.container}>
        <img src={CnS} height="60px"></img>
        <div>
          <p>
            • Setting different scenarios to migrate the code from svn to
            Github, changing the start, building and deployment of every
            application of Ui and web services.
          </p>
          <p>
            • Developing solutions for both front and back end to maintain the
            quality and service of the application that involves web
            services/applications.
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
      cliente:
      <div className={companyStyle.container}>
        <img src={CnS} height="60px"></img>
        <div>
          <p>
            • Configurando diferentes cenários para migrar o código do svn para
             Github, mudando o start, a building e deployment de cada
             aplicação de Ui e serviços web.
          </p>
          <p>
            • Desenvolvimento de soluções para front e back end para manter o
             qualidade e serviço da aplicação que envolve web
             serviços/aplicativos.
          </p>
          <p>Contate-me para mais detalhes.</p>
        </div>
      </div>
    </>
  );
}


export default {
  eng: {
    name: "TechProject",
    date: "05-2022 to present time",
    textTop: "TechProject - Your reliable IT Staffing partner.",
    text: "IT Analyst - Angular, JavaScript, Nodejs and Java",
    detail: <DetailsEng />,
  },
  pt: {
    name: "TechProject",
    date: "05-2022 ate presente momento",
    textTop: "TechProject - Seu parceiro confiável de equipe de TI.",
    text: "IT Analyst - Angular, JavaScript, Nodejs and Java",
    detail: <DetailsPtBr />,
  },
  info: {
    img: img,
    website: "https://techprojects.com/",
    linkedin: "https://www.linkedin.com/company/techprojects/",
  },
};
