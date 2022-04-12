import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import NavHome from "../components/NavHome/NavHome";

function Home() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-login">
          <h1>Bem-Vindo</h1>
        </div>
        <NavHome />
      </div>
    </div>
  );
}

export default Home;
