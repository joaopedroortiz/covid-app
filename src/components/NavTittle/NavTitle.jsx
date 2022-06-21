import React from "react";
import "./NavTitle.css";
import "../../styles/global.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const NavTitle = ({ text }) => {
  return (
    <div className="container-top">
      <div className="container-top-title">
        <h1>{text}</h1>
      </div>
      <div className="container-arrow">
        <BsFillArrowLeftCircleFill />
      </div>
    </div>
  );
};
export default NavTitle;
