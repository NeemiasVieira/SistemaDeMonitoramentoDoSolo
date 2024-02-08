import React from "react";
import { SecaoPerguntaFaq } from "./PerguntaFAQStyle";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PerguntaFAQProps{
  pergunta: string,
  resposta: string
}

export const PerguntaFAQ: React.FC<PerguntaFAQProps> = ({ pergunta, resposta }) => {
  const togglePergunta = (e: any) => {
    var questao = e.target.parentNode;
    var elemento = questao.parentNode;
    if (elemento.classList.contains("pergunta")) {

      elemento = elemento.parentNode;
    }
    if (elemento.classList.contains("secaoPergunta")) {
      elemento = elemento.children[0];
    }

    if (elemento.classList.contains("ativo")) {
      elemento.classList.remove("ativo");
    } else {
      elemento.classList.add("ativo");
    }
  }

  return (
    <SecaoPerguntaFaq className="secaoPergunta">
      <div className="faqs">
        <div className="pergunta" onClick={(e) => togglePergunta(e)}>
          <h3>{pergunta}</h3>
          <FontAwesomeIcon icon={faChevronRight} className="icone" />
        </div>
        <div className="resposta">
          <p>{resposta}</p>
        </div>
      </div>
    </SecaoPerguntaFaq>
  );
};
