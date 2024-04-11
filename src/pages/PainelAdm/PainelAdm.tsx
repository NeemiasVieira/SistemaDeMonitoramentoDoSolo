import React from "react";
import { PainelAdmStyle } from "./PainelAdmStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faSpa, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";

const PainelAdm = () => {
  const navigate = useNavigate();
  const { notificar } = useNotificacoes();

  const notificarIndisponibilidade = () => {
    notificar({tipo: "NOTIFICACAO", mensagem: "Funcionalidade indisponível no momento", tempoEmSeg: 4});
  }

  return (
      <PainelAdmStyle>
        <h2>Painel Administrativo</h2>
        <section className="menu">
          <button className="botaoMenu especies" onClick={() => navigate("/adm/especies")}>
            <FontAwesomeIcon icon={faSpa} />
            <h3>Espécies</h3>
            <p>Gerenciamento de espécies ativas</p>
          </button>
          <button className="botaoMenu" onClick={notificarIndisponibilidade}>
            <FontAwesomeIcon icon={faUsers} />
            <h3>Usuários</h3>
            <p>Em desenvolvimento</p>
          </button>
          <button className="botaoMenu" onClick={notificarIndisponibilidade}>
            <FontAwesomeIcon icon={faFolder} />
            <h3>Em breve</h3>
            <p></p>
          </button>
          <button className="botaoMenu" onClick={notificarIndisponibilidade}>
            <FontAwesomeIcon icon={faFolder} />
            <h3>Em breve</h3>
            <p></p>
          </button>
        </section>
      </PainelAdmStyle>
  );
};

export default PainelAdm;
