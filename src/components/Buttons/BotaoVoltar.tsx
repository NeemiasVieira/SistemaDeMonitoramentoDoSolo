import React from "react";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import styled from "styled-components";

const BotaoVoltarStyle = styled.div`
  .buttonVoltar {
    position: absolute;
    left: 75px;
    top: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--contrast);
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 7px;
    border: solid #aaa 1px;
    color: var(--text-primary);
    font-size: 1.2rem;

    svg {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    .buttonVoltar {
      top: 110px;
      left: 25px;
      margin: 0;
      width: 20px;
      height: 15px;
      font-size: 0.8rem;
      span {
        display: none;
      }
    }
  }
`;

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
