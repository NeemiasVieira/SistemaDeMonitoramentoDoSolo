import React from "react";
import { AlertaStyle } from "./AlertaStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { SemAlertaStyle } from "./AlertaStyle";

interface AlertaProps {
  alerta?: string;
}

export const Alerta: React.FC<AlertaProps> = ({ alerta }) => {
  return (
    <>
      {alerta && (
        <AlertaStyle>
          <FontAwesomeIcon icon={faTriangleExclamation} />
          <p>{alerta}</p>
        </AlertaStyle>
      )}
      {!alerta && (
        <SemAlertaStyle>
          <FontAwesomeIcon icon={faSquareCheck} />
          <p>
            Tudo certo por aqui! Parabéns por cuidar tão bem da sua plantinha, caso haja algum problema avisaremos aqui!
          </p>
        </SemAlertaStyle>
      )}
    </>
  );
};
