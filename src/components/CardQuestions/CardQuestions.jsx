import React from "react";
import "../../styles/global.css";
import "../../styles/button.css";
import "./CardQuestions.css";
import TitleQuestions1 from "./Title/TitleQuestions1";
import TitleQuestions2 from "./Title/TitleQuestions2";
import TitleQuestions3 from "./Title/TitleQuestions3";
import TitleQuestions4 from "./Title/TitleQuestions4";
import TitleQuestions5 from "./Title/TitleQuestions5";
import TitleQuestions6 from "./Title/TitleQuestions6";
import TitleQuestions7 from "./Title/TitleQuestions7";
import TextQuestions1 from "../CardQuestions/Text/TextQuestions1";
import TextQuestions2 from "../CardQuestions/Text/TextQuestions2";
import TextQuestions3 from "../CardQuestions/Text/TextQuestions3";
import TextQuestions4 from "../CardQuestions/Text/TextQuestions4";
import TextQuestions5 from "../CardQuestions/Text/TextQuestions5";
import TextQuestions6 from "../CardQuestions/Text/TextQuestions6";
import TextQuestions7 from "../CardQuestions/Text/TextQuestions7";
import BarQuestions from "../CardQuestions/Bar/BarQuestions";

function CardQuestions() {
  return (
    <div className="container-cardQuestions">
      <div>
        <TitleQuestions1 />
      </div>
      <div>
        <TextQuestions1 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions2 />
      </div>
      <div>
        <TextQuestions2 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions3 />
      </div>
      <div>
        <TextQuestions3 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions4 />
      </div>
      <div>
        <TextQuestions4 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions5 />
      </div>
      <div>
        <TextQuestions5 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions6 />
      </div>
      <div>
        <TextQuestions6 />
      </div>
      <div>
        <BarQuestions />
      </div>
      <div>
        <TitleQuestions7 />
      </div>
      <div>
        <TextQuestions7 />
      </div>
      <div>
        <BarQuestions />
      </div>
    </div>
  );
}

export default CardQuestions;
