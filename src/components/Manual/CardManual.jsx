import React from "react";
import "../../styles/global.css";
import "./CardManual.css";
import TitleManual1 from "../Manual/Title/TitleManual1";
import TitleManual2 from "../Manual/Title/TitleManual2";
import TitleManual3 from "../Manual/Title/TitleManual3";
import TitleManual4 from "../Manual/Title/TitleManual4";
import TitleManual5 from "../Manual/Title/TitleManual5";
import TitleManual6 from "../Manual/Title/TitleManual6";
import TitleManual7 from "../Manual/Title/TitleManual7";
import TitleManual8 from "../Manual/Title/TitleManual8";
import TextManual from "../Manual/Text/TextManual";

function CardManual() {
  return (
    <div className="container-cardManual">
      <div>
        <div>
          <TitleManual1 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>
      <div>
        <div>
          <TitleManual2 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>
      <div>
        <div>
          <TitleManual3 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>

      <div>
        <div>
          <TitleManual4 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>

      <div>
        <div>
          <TitleManual5 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>

      <div>
        <div>
          <TitleManual6 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>

      <div>
        <div>
          <TitleManual7 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>

      <div>
        <div>
          <TitleManual8 />
        </div>
        <div>
          <TextManual />
        </div>
      </div>
    </div>
  );
}

export default CardManual;
