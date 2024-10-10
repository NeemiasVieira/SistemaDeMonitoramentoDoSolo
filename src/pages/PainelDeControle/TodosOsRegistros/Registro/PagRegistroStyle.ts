import styled from "styled-components";

export const PagRegistroStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 20px;

  h1 {
    text-align: center;
  }

  .informacoes {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    width: auto;
    height: auto;
    background-color: var(--white);
    border-radius: 10px;
    padding: 20px 50px;
    border: solid var(--border-primary) 1px;
    background-color: var(--contrast);
  }

  .nuRegistro {
    font-size: 2rem;
    font-weight: 700;
    margin: 10px 0 30px 0;
    text-align: center;
    width: 300px;
    background-color: var(--contrast);
    padding-left: 10px;
    border-radius: 10px;
  }

  .botoesAcao {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 30px;
  }

  .botaoSaude,
  .BotaoDownloadPDF {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--contrast);
    color: var(--text-primary);
    font-size: 1rem;
    padding: 10px 10px;
    text-decoration: none;
    border-radius: 5px;
    border: solid var(--border-primary) 1px;
    transition: all 200ms;
    gap: 5px;
    width: 200px;
  }

  .botaoSaude:hover,
  .BotaoDownloadPDF:hover {
    transform: scale(1.1);
  }

  .BotaoDownloadPDF {
    cursor: pointer;
  }

  .ico {
    font-size: 1.8rem;
  }

  .DadosSensores {
    background-color: var(--contrast);
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .imagemEDiagnosticoDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    background-color: var(--contrast);
    padding: 50px;
    border-radius: 10px;
    width: 60vw;
    max-width: 700px;
    margin-bottom: 50px;

    h3 {
      margin: 0 0 30px 0;
    }
  }

  .imagemEDiagnostico {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    width: 100%;

    p {
      width: 50%;
      align-self: flex-start;
      margin-left: 20px;
    }

    img {
      width: 300px;
      height: 300px;
      border-radius: 10px;
      padding: 10px;
      background-color: var(--white);
      border: solid #aaa 1px;
      transition: all 500ms;
      cursor: pointer;
      -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
      box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    }

    img:hover {
      transform: scale(1.8);
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 60px;

    .informacoes {
      max-width: 100%;
      margin: 0;
      padding: 20px 4vw;
    }

    .botoesAcao {
      gap: 20px;
    }

    .botaoSaude,
    .BotaoDownloadPDF {
      width: 148px;
      font-size: 1rem;
    }

    .botaoSaude:hover,
    .BotaoDownloadPDF:hover {
      transform: scale(1);
    }

    .BotaoDownloadPDF {
      cursor: pointer;
    }

    .ico {
      font-size: 1.5rem;
    }

    .DadosSensores {
      max-width: 90vw;
      padding: 0;
      border-radius: 8px;
    }

    .imagemEDiagnostico {
      flex-flow: column wrap;

      img {
        width: 200px;
        height: 200px;
      }

      img:hover {
        transform: scale(1.3);
      }
    }
  }
`;
