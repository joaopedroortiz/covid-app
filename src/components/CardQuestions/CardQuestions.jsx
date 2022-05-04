import React from "react";
import "../../styles/global.css";
import "../../styles/button.css";
import "./CardQuestions.css";
import TitleQuestions from "../CardQuestions/Title/TitleQuestions";
import TextQuestions from "../CardQuestions/Text/TextQuestions";
import BarQuestions from "../CardQuestions/Bar/BarQuestions";

function CardQuestions() {
  return (
    <div className="container-cardQuestions">
      <div>
        <TitleQuestions />
      </div>
      <div>
        <TextQuestions />
      </div>
      <div>
        <BarQuestions />
      </div>
    </div>
  );
}

export default CardQuestions;
