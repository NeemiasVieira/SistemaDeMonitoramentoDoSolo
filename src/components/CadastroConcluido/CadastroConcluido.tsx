import { CadastroConcluidoMain } from "./CadastroConcluidoStyle";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const CadastroConcluido = () => {
  return (
    <CadastroConcluidoMain>
      <section>
        <h2>Cadastro concluido com sucesso!</h2>
        <FontAwesomeIcon icon={faCheck} className="icone" />
        <Link to="/login" className="link">
          Ir para Login
        </Link>
      </section>
    </CadastroConcluidoMain>
  );
};
