import React from "react";
import img from "../../assets/imgs/techProject-Logo.png";
import CnS from "../../assets/imgs/C&S.png";
import companyStyle from "./companyStyle.module.css";

function Details() {
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

export default {
  eng: {
    name: "TechProject",
    date: "05-2022 to present time",
    textTop: "TechProject - Your reliable IT Staffing partner.",
    text: "IT Analyst - Angular, JavaScript, Nodejs and Java",
    detail: <Details />,
  },
  pt: {
    name: "TechProject",
    date: "05-2022 ate presente momento",
    textTop: "TechProject - Seu parceiro confiável de equipe de TI.",
    text: "IT Analyst - Angular, JavaScript, Nodejs and Java",
    detail: <div />,
  },
  info: {
    img: img,
    website: "https://techprojects.com/",
    linkedin: "https://www.linkedin.com/company/techprojects/",
  },
};
