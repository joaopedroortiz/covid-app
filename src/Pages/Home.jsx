import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import NavHome from "../components/NavHome/NavHome";

function Home() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div>Menu</div>
        <div>Titulo</div>
        <div>Noticias</div>
        <div>
          <NavHome />
        </div>
      </div>
    </div>
  );
}

export default Home;
