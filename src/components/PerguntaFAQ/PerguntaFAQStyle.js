import styled from "styled-components";

export const SecaoPerguntaFaq = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 900px;
  margin: 5px;
  max-width: 75vw;
  background: #222;
  border: solid #ddd 2px;
  border-radius: 10px;
  color: whitesmoke;

  .pergunta {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: 900px;
    max-width: 75vw;
    cursor: pointer;
  }

  .icone {
    font-size: 1.5em;
    transition: transform 0.1s ease-in;
    margin-right: 15px;
  }

  .pergunta h3 {
    margin: 10px 0;
    font-size: 1.4em;
    font-weight: 400;
    width: 900px;
    max-width: 70vw;
    padding-top: 10px;
    padding-left: 20px;
    min-height: 40px;
  }

  .resposta p {
    line-height: 1.6;
    font-size: 1.2em;
    font-weight: 400;
    margin-left: 10px;
  }

  .resposta {
    max-height: 0;
    overflow: hidden;
    transition: max-height 1s ease;
  }

  .ativo .resposta {
    margin: 0;
    max-height: 500px;
    animation: fade 1s ease-in-out;
    padding-left: 5px;
    border-top: solid rgb(30, 255, 100) 2px;
  }

  .ativo .icone {
    transform: rotate(90deg);
  }

  @keyframes fade {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 90vw;
    border: solid whitesmoke 2px;
    border-radius: 10px;
    color: whitesmoke;

    .pergunta {
      max-width: 90vw;
    }

    .icone {
      margin-right: 15px;
    }

    .pergunta h3 {
      font-size: 1.1em;
      margin-left: 10px;
      max-width: 90vw;
      min-height: 50px;
    }

    .resposta p {
      font-size: 0.9em;
    }
  }
`;
