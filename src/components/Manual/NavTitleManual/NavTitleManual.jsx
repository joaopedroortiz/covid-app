import React from "react";
import "./NavTitleManual.css";
import "../../../styles/global.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const NavTitle = () => {
  return (
    <div className="container-top">
      <div className="container-top-title">
        <h1>Manual de prevenção</h1>
      </div>
      <div className="container-arrow">
        <BsFillArrowLeftCircleFill />
      </div>
    </div>
  );
};
export default NavTitle;
