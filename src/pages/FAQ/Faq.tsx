import React from "react";
import { FaqMain } from "./FaqStyle";
import { PerguntaFAQ } from "../../components/PerguntaFAQ/PerguntaFAQ";
import { Footer } from "../../components/Footer/Footer";
import { Navigation } from "../../components/Navigation/Navigation";

const Faq = () => {
  return (
    <>
      <FaqMain>
        <Navigation />
        <h1>FAQ - Perguntas Frequentes</h1>
        <h2>Perguntas Relacionadas ao Sistema</h2>
        <PerguntaFAQ
          pergunta="Quais serão as vantagens de utilizar o Sistema de Monitoramento?"
          resposta="Utilizando o sistema, você será capaz de monitorar a saúde da sua plantinha e acompanhar também seu histórico, auxiliando nas tomadas de decisões para o seu melhor desenvolvimento."
        />
        <PerguntaFAQ
          pergunta="Como funciona o pré-diagnóstico da planta?"
          resposta="Através do nosso incrível sensor, que captura os níveis de nitrogênio, fósforo, potássio, umidade, temperatura e pH, e também com o auxílio da inteligência do nosso sistema, será possível alertar ao usuário possíveis perigos e/ou problemas com a planta, emitindo alertas sobre falta ou excesso de nutrientes e condições básicas de crescimento."
        />
        <PerguntaFAQ
          pergunta="O que será possível com as imagens da câmera?"
          resposta="Ainda não temos essa parte definida 100%, mas a intenção é que o usuário consiga ver sua planta, mesmo que esteja distante, e com base nas capturas de imagens, também queremos fazer possíveis pré-diagnósticos de problemas para evitar que sua plantinha fique doente."
        />
        <h2 className="subtitulo">Perguntas Técnicas</h2>
        <PerguntaFAQ
          pergunta="Por que uma aplicação Web e não um App Mobile?"
          resposta="Uma aplicação Web é vantajosa, pois não ocupa espaço no seu aparelho e pode ser utilizada tanto por computadores quanto smartphones."
        />
        <PerguntaFAQ
          pergunta="Qual a tecnologia utilizada para este projeto?"
          resposta="React com JavaScript - Vantajoso por ser uma Single Page Application (SPA), além de oferecer softwares com alto desempenho, o React é flexível e permite que todos os códigos sejam separados e utilizados como componentes reutilizáveis."
        />
        <PerguntaFAQ
          pergunta="Qual o serviço (API) utilizado pelo site?"
          resposta="O site consome nossa propria API, desenvolvida utilizando NodeJs, e conta com um avançado sistema rápido que garante a qualidade da experiência do usuário."
        />
        <PerguntaFAQ
        pergunta="Qual banco de dados é utilizado para guardar os cadastros?"
        resposta="MongoDB, utilizando a ORM Prisma para integração com a API."
        />
      </FaqMain>
      <Footer />
    </>
  );
};

export default Faq;
