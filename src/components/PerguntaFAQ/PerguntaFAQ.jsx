import React from "react";
import { SecaoPerguntaFaq } from "./PerguntaFAQStyle";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export const PerguntaFAQ = ({pergunta, resposta}) => {


    function togglePergunta(e){
        var questao = (e.target.parentNode);
        var elemento = questao.parentNode;
        if (elemento.classList.contains("pergunta")){ //Garante que o elemento será a div Faq (correção de bug)
            elemento = elemento.parentNode;
            
        }
        if (elemento.classList.contains("secaoPergunta")){ //Garante que o elemento será a div Faq (correção de bug)
            elemento = elemento.children[0];
        }
        
        if(elemento.classList.contains("ativo")){
            elemento.classList.remove("ativo");
        }else{
            elemento.classList.add("ativo");
        }
    }

    

    return(
        <SecaoPerguntaFaq className="secaoPergunta">
            <div className="faqs">
                <div className="pergunta" onClick={(e) => togglePergunta(e)} >
                    <h3>{pergunta}</h3>                    
                    <FontAwesomeIcon icon={faChevronRight} className="icone"/>
                </div>
                <div className="resposta">
                    <p>{resposta}</p>
                </div>
            </div>
            
        </SecaoPerguntaFaq>
    )
}

