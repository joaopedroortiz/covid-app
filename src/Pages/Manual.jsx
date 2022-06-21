import React from "react";
import NavHome from "../components/NavHome/NavHome";
import "../styles/global.css";
import "../styles/manual.css";
import NavTitleManual from "../components/Manual/NavTitleManual/NavTitleManual";
import CardManual from "../components/Manual/CardManual";

function Manual() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-navTittle">
          <NavTitleManual />
        </div>
        <div className="container-manual">
          <CardManual />
        </div>
        <div className="container-navHome">
          <NavHome />
        </div>
      </div>
    </div>
  );
}

export default Manual;
