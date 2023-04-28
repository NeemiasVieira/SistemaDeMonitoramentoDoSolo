import React from "react";
import { MensagemErroStyle } from "./MensagemDeErroStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const MensagemDeErro = ({ erro }) => {
  return (
    <MensagemErroStyle>
      <div>
        <h1>Oops!</h1>
        <FontAwesomeIcon icon={faTriangleExclamation} className="icone" />
        <h2>Algo deu errado :(</h2>
        <h3>Resposta do servidor:</h3>
         <p><strong>{erro}</strong></p>
        
        <Link to="..">Voltar para Home</Link>
      </div>
    </MensagemErroStyle>
  );
};
