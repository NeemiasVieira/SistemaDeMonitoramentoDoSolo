import React from "react";
import { IconeLogoSms } from "../Icones/sms-logo";
import { Link } from "react-router-dom";

interface ListaNavegacaoProps {
  closeModal?: () => void;
}

export const ListaNavegacaoNaoAutenticada: React.FC<ListaNavegacaoProps> = ({ closeModal }) => {
  const urlCompleta = window.location.href;
  const caminhoAtual = new URL(urlCompleta).hash.replace("#", "");

  return (
    <ul className="navegacao">
      <li className="logo">
        <IconeLogoSms path={"/"} />
      </li>
      <li className={caminhoAtual === "/aplicacao" ? "selecionado" : "naoSelecionado"}>
        <Link to="/aplicacao" onClick={closeModal}>
          Aplicação
        </Link>
      </li>
      <li className={caminhoAtual === "/faq" ? "selecionado" : "naoSelecionado"}>
        <Link to="/faq" onClick={closeModal}>
          FAQ
        </Link>
      </li>
      <li className="botaoLogin">
        <Link to="/login" onClick={closeModal}>
          Login
        </Link>
      </li>
    </ul>
  );
};
