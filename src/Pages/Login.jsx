import React from "react";
import Input from "../components/Input/Input";
import Title from "../components/Title";
import Logo from "../assets/img/covid19.svg";
import "../styles/global.css";
import "../styles/login.css";
import "../styles/logo.css";
import "../styles/button.css";
import { BiRightArrowAlt } from "react-icons/bi";

function Login() {
  return (
    <div className="base-container">
      <div className="container-card">
        <div>
          <img src={Logo} alt="logotipo" className="logo" />
        </div>
        <div>
          <Title />
        </div>
        <div className="container-email">
          <Input
            attribute={{
              id: "email",
              name: "email",
              type: "email",
              placeholder: "Email",
            }}
          />
        </div>
        <div className="container-senha">
          <Input
            attribute={{
              id: "senha",
              name: "senha",
              type: "password",
              placeholder: "Senha",
            }}
          />
        </div>
        <div>
          <button className="btn">Login</button>
        </div>
        <div>
          <button className="btn">Cadastro</button>
        </div>
        <div className="container-link">
          <h2>
            <a href="#">
              Esqueci minha senha
              <BiRightArrowAlt />
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
