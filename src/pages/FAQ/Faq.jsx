import React from "react";
import { FaqMain } from "./FaqStyle";
import { PerguntaFAQ } from "../../components/PerguntaFAQ/PerguntaFAQ";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";

const Faq = () => {
  return (
    <>
      <FaqMain>
        <Navigation />
        <h1>FAQ - Perguntas Frequentes</h1>
        <PerguntaFAQ
          pergunta="Qual banco de dados é utilizado para guardar os cadastros?"
          resposta="Firebase"
        />
        <PerguntaFAQ
          pergunta="Por que uma aplicação Web e não um App Mobile?"
          resposta="Uma aplicação Web é vantajosa pois não ocupa espaço no seu aparelho e pode ser utlizada tanto por computadores quanto smartphones. "
        />
        <PerguntaFAQ
          pergunta="Qual a tecnologia utilizada para este projeto?"
          resposta="ReactJs - Vantajoso por ser SinglePageAplication (SPA), além de oferecer softwares com alto desempenho, o React é flexível e permite que todos os códigos sejam separados e utilizados como componentes reutilizáveis."
        />
      </FaqMain>
      <Footer />
    </>
  );
};

export default Faq;
