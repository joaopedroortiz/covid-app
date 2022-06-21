import React from "react";
import NavHome from "../components/NavHome/NavHome";
import "../styles/global.css";
import "../styles/questionario.css";
import NavTitle from "../components/NavTittle/NavTitle";
import CardQuestions from "../components/CardQuestions/CardQuestions";

function Questionario() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-navTittle">
          <NavTitle text="Questionario" />
        </div>
        <div className="container-questions">
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
