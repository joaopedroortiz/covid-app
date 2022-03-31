import React from "react";
import "../styles/global.css";
import "../styles/cadastro.css";
// import Button from "../components/Button";
import Input from "../components/Input/Input";

const Cadastro = () => {
  return (
    <div className="base-container">
      <div className="container-card">
        <div className="container-nome">
          <Input
            attribute={{
              id: "nome",
              name: "nome",
              type: "text",
              placeholder: "Nome",
            }}
          />
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
        <div className="container-gen-tel">
          <div className="container-genero">
            <select name="genero" id="genero" className="genero">
              <option value="">Genero</option>
              <option value="masculino">Masculino</option>
              <option value="femenino">Feminino</option>
            </select>
          </div>

          <div className="container-telefone">
            <Input
              attribute={{
                id: "telefone",
                name: "telefone",
                type: "number",
                placeholder: "Telefone",
              }}
            />
          </div>
        </div>

        <div className="container-nacionalidade">
          <Input
            attribute={{
              id: "nacionalidade",
              name: "nacionalidade",
              type: "text",
              placeholder: "Nacionalidade",
            }}
          />
        </div>
        <div className="container-dataNasc">
          <Input
            attribute={{
              id: "dataNascimento",
              name: "dataNascimento",
              type: "date",
              placeholder: "Data de Nascimento",
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
          <button className="btn">Cadastro</button>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
