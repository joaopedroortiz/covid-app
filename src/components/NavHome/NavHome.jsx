import React from "react";
import "./NavHome.css";
import "../../styles/global.css";
import { BsHouseDoor } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

const NavHome = () => {
  return (
    <div className="container-nav">
      <div className="container-nav-home">
        <BsHouseDoor />
      </div>
      <div className="container-nav-title">
        <h1>Home</h1>
      </div>
      <div className="container-nav-person">
        <BsPerson />
      </div>
    </div>
  );
};
export default NavHome;
