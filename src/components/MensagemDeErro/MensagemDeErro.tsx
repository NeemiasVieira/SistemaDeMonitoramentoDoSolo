import React, { useEffect } from "react";
import { MensagemErroStyle } from "./MensagemDeErroStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

interface MensagemDeErroProps{
  error: string,
  mensagemBotao: string
  setError: any
}

export const MensagemDeErro: React.FC<MensagemDeErroProps> = ({ error, mensagemBotao, setError }) => {

  const voltar = () => {
    setError(null);
  }

  useEffect(() => {
    setTimeout(() => {
      setError(null)
    }, 4000)
  })


  return (
    <MensagemErroStyle>
        <div className="mensagemErroDiv">
         <FontAwesomeIcon icon={faTriangleExclamation} className="icone" />
         <p>{error}</p>
        </div>
        
        {/* <button onClick={voltar}>{mensagemBotao}</button> */}

    </MensagemErroStyle>
  );
};
