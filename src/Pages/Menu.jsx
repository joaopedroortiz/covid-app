import React from "react";
import "../styles/global.css";
import "../styles/menu.css";

function Menu() {
  return (
    <div className="container-card-green">
      <div id="close">
        <span>X</span>
      </div>
      <div className="menu-box">
        <p className="menu-text">Notificações</p>
        <div className="divider"></div>
        <p className="menu-text">Notícias</p>
        <div className="divider"></div>
        <p className="menu-text">Manual de Prevenção</p>
        <div className="divider"></div>
        <p className="menu-text">Metas</p>
        <div className="divider"></div>
        <p className="menu-text">Ajuda</p>
        <div className="divider"></div>
        <p className="menu-text">Sair</p>
      </div>
    </div>
  );
}

export default Menu;
