import React from "react";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import styled from "styled-components";

const BotaoVoltarStyle = styled.div`
  .buttonVoltar {
    position: absolute;
    left: 4%;
    top: 13%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--white);
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 7px;
    border: solid #aaa 1px;
    color: #000;
    font-size: 1.2rem;

    svg {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 480px) {
    .buttonVoltar {
      top: 16%;
      left: 5%;
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
