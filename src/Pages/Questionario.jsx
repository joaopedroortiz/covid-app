import React from "react";
import NavHome from "../components/NavHome/NavHome";
import "../styles/global.css";
import "../styles/questionario.css";
import NavTitle from "../components/CardQuestions/Title/TitleQuestions";
import CardQuestions from "../components/CardQuestions/CardQuestions";

function Questionario() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-navTittle">
          <NavTitle />
        </div>
        <div className="container-questions">
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
          <CardQuestions />
        </div>
        <div className="container-navHome">
          <NavHome />
        </div>
      </div>
    </div>
  );
}

export default Questionario;
