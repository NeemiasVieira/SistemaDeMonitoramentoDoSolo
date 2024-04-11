import React from "react";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BotaoVoltarStyle } from "./BotaoVoltarStyle";

interface BotaoVoltarProps {
  path: string;
}

export const BotaoVoltar: React.FC<BotaoVoltarProps> = ({ path }) => {
  return (
    <BotaoVoltarStyle>
      <Link to={path} className="buttonVoltar">
        <FontAwesomeIcon icon={faCircleLeft} />
        <span>Voltar</span>
      </Link>
    </BotaoVoltarStyle>
  );
};
