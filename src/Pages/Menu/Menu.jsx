import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu-body">
      <div className="menu-box">
        <div id="close">X</div>
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
