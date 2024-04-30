import React from "react";
import SMSLogo from "../../assets/img/smslogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ImagemLogo = styled.img`
  width: 75px;
  height: 75px;
  cursor: pointer;
  margin-top: 5px;
  border-radius: 100px;
`;

interface IconeLogoProps{
  path: string;
}

export const IconeLogoSms: React.FC<IconeLogoProps> = ({path}) => {

  return (
    <>
      <Link to={path}>
        <ImagemLogo src={SMSLogo} alt="Logo do sistema de monitoramento do solo"></ImagemLogo>
      </Link>
    </>
  );
};
