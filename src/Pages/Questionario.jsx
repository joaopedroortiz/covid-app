import React from "react";
import NavHome from "../components/NavHome/NavHome";
import "../styles/global.css";
import "../styles/questionario.css";
import NavTittle from "../components/NavTittle/NavTittle";
import CardQuestions from "../components/CardQuestions/CardQuestions";

function Questionario() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-navTittle">
          <NavTittle />
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
