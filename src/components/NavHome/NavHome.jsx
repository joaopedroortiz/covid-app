import React from "react";
import "./NavHome.css";
import "../../styles/global.css";
import { GrHomeRounded } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

const NavHome = () => {
  return (
    <div className="container-nav">
      <div className="container-nav-home">
        <GrHomeRounded />
      </div>
      <div className="container-nav-title">
        <h1>Home</h1>
      </div>
      <div className="container-nav-person">
        <BsPerson />
      </div>
      <div className="container-nav-arrow">
        <BsArrowRightCircle />
      </div>
    </div>
  );
};
export default NavHome;
