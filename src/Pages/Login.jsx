import React, { useState } from "react";
import Input from "../components/Input/Input";
import Title from "../components/Title";
import Logo from "../assets/img/covid19.svg";
import "../styles/global.css";
import "../styles/login.css";
import "../styles/logo.css";
import "../styles/button.css";
import { BiRightArrowAlt } from "react-icons/bi";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  function handleChange(email, value) {
    if (email === "email") {
      setUser(value);
    } else {
      if (value.lenght < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
      setPassword(value);
    }
  }
  function ifMatch(param) {
    if (param.user.lenght > 0 && param.password.lenght > 0) {
      if (param.user === "diego" && param.password === "12345678") {
        const [user, password] = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    } else {
      setIsLogin(false);
    }
  }
  function handleLogin() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  }

  function handleCadastro() {
    let account = { user, password };
    if (account) {
    }
  }

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
            handleChange={handleChange}
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
            handleChange={handleChange}
            param={passwordError}
          />
        </div>
        <div>
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        </div>
        <div>
          <button onClick={handleCadastro} className="btn">
            Cadastro
          </button>
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
