import styled from "styled-components";

export const NotificacaoStyle = styled.section`
  position: absolute;
  max-width: 375px;
  width: 325px;
  display: flex;
  flex-flow: column-reverse wrap;
  gap: 10px;
  color: whitesmoke;
  font-weight: 700;
  position: fixed;
  top: 1.5%;
  right: 0%;
  z-index: 2;
  transition: all 200ms;
  background-color: transparent;
  border-radius: 20px;

  .ERRO {
    background-color: #f44;
  }

  .SUCESSO {
    background-color: var(--light-green);
  }

  .ALERTA {
    background-color: #faa700;
  }

  .NOTIFICACAO {
    background-color: #222;
  }

  .mensagemNotificacaoDiv {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    width: 275px;
    max-width: 400px;
    gap: 10px;
    padding: 8px 15px;
    border-radius: 10px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);

    .icone {
      max-width: 25px;
      color: var(--white);
      padding: 0;
    }

    p {
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 500;
      width: 100%;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      top: 2px;
      right: -3px;
      margin: 0;
      max-width: 35vw;
      text-decoration: none;
      color: whitesmoke;
      font-size: 1rem;
      font-weight: 900;
      transition: transform 300ms;
      background-color: transparent;
      border: none;
      cursor: pointer;
      align-self: flex-start;
      width: 2px;

      svg {
        color: #ddd;
        font-size: 0.9rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .mensagemNotificacaoDiv {
      button {
        right: -10px;
      }
    }
  }
`;
