import React, { useState, useRef } from 'react';
import { SecaoPerguntaFaq } from './PerguntaFAQStyle';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PerguntaFAQProps {
  pergunta: string;
  resposta: string;
}

export const PerguntaFAQ: React.FC<PerguntaFAQProps> = ({ pergunta, resposta }) => {
  const [exibirResposta, setExibirResposta] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <SecaoPerguntaFaq $exibirResposta={exibirResposta}>
      <div className={`faqs ${exibirResposta ? 'ativo' : ''}`}>
        <div className="pergunta" onClick={() => setExibirResposta(!exibirResposta)}>
          <h3>{pergunta}</h3>
          <FontAwesomeIcon icon={faChevronRight} className="icone" />
        </div>
        <div
          className="resposta"
          style={{
            maxHeight: exibirResposta ? `${contentRef.current?.scrollHeight}px` : '0px',
          }}
          ref={contentRef}
        >
          <p>{resposta}</p>
        </div>
      </div>
    </SecaoPerguntaFaq>
  );
};
