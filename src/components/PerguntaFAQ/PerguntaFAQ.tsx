import React, { useState } from "react";
import { SecaoPerguntaFaq } from "./PerguntaFAQStyle";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PerguntaFAQProps {
  pergunta: string;
  resposta: string;
}

export const PerguntaFAQ: React.FC<PerguntaFAQProps> = ({ pergunta, resposta }) => {
  const [exibirResposta, setExibirResposta] = useState<boolean>(false);

  return (
    <SecaoPerguntaFaq $exibirResposta={exibirResposta}>
      <div className={`faqs ${exibirResposta ? "ativo" : ""}`}>
        <div className="pergunta" onClick={() => setExibirResposta(!exibirResposta)}>
          <h3>{pergunta}</h3>
          <FontAwesomeIcon icon={faChevronRight} className="icone" />
        </div>
        {exibirResposta && (
          <div className="resposta ativo">
            <p>{resposta}</p>
          </div>
        )}
      </div>
    </SecaoPerguntaFaq>
  );
};
