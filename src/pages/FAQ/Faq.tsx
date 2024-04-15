import React from "react";
import { FaqMain } from "./FaqStyle";
import { PerguntaFAQ } from "../../components/PerguntaFAQ/PerguntaFAQ";

const Faq = () => {
  
  return (

      <FaqMain>
        <h1>FAQ</h1>
        <h2 className="subtitulo">Perguntas Relacionadas ao Sistema</h2>
        <PerguntaFAQ
          pergunta="Quais serão as vantagens de utilizar o Sistema de Monitoramento?"
          resposta="Utilizando o sistema, você será capaz de monitorar a saúde da sua plantinha e acompanhar também seu histórico, auxiliando nas tomadas de decisões para o seu melhor desenvolvimento."
        />
        <PerguntaFAQ
          pergunta="Como funciona o pré-diagnóstico da planta?"
          resposta="Através dos nossos incríveis sensores, que capturam os níveis de nitrogênio, fósforo, potássio, luminosidade, umidade, temperatura e pH, e também com o auxílio da Inteligência Artificial do nosso sistema, será possível alertar ao usuário possíveis perigos e/ou problemas com a planta, emitindo alertas sobre falta ou excesso de nutrientes e condições básicas de saúde."
        />
        <PerguntaFAQ
          pergunta="O que a Inteligência Artificial faz?"
          resposta="A partir de um modelo de treinamento de dados, ela recebe uma foto da planta e processa a imagem, e diz se existe algum indicativo de doença/patologia."
        />
        <h2 className="subtitulo">Perguntas Técnicas</h2>
        <PerguntaFAQ
          pergunta="Por que uma aplicação Web e não um Mobile App?"
          resposta="Uma aplicação Web é vantajosa, pois não ocupa espaço no seu aparelho e pode ser utilizada tanto por computadores quanto smartphones."
        />
        <PerguntaFAQ
          pergunta="Qual a tecnologia utilizada no site?"
          resposta="React com TypeScript - Vantajoso por ser uma Single Page Application (SPA), além de oferecer softwares com alto desempenho, o React é flexível e permite que todos os códigos sejam separados e utilizados como componentes reutilizáveis."
        />
        <PerguntaFAQ
          pergunta="Qual o serviço (API) utilizado pelo site?"
          resposta="O sistema/site consome nossa propria API, desenvolvida utilizando NodeJs, NestJs, TypeScript através da arquitetura GraphQL, e conta com um avançado sistema seguro e rápido que garante a qualidade da experiência do usuário."
        />
        <PerguntaFAQ
        pergunta="Qual é o banco de dados?"
        resposta="MongoDB, utilizando a ORM Prisma para integração da API com o Banco de Dados."
        />
      </FaqMain>
  );
};

export default Faq;
