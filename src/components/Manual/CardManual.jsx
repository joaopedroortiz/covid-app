import React from "react";
import "../../styles/global.css";
import "./CardManual.css";
import TitleManual from "../Manual/Title/TitleManual";
import TextManual from "../Manual/Text/TextManual";

function CardManual() {
  return (
    <div className="container-cardManual">
      <div>
        <TitleManual />
      </div>
      <div>
        <TextManual />
      </div>
    </div>
  );
}

export default CardManual;
