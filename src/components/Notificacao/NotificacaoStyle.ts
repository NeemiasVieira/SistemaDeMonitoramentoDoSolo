import styled from 'styled-components';

export const NotificacaoStyle = styled.section`
  position: absolute;
  max-width: 375px;
  width: 325px;
  display: flex;
  flex-flow: column-reverse wrap;
  gap: 15px;
  color: whitesmoke;
  font-weight: 700;
  position: fixed;
  top: 10.5%;
  right: -1%;
  z-index: 2;
  transition: all 200ms;
  background-color: transparent;
  border-radius: 20px;

  .ERRO {
    background-color: #f11;
  }

  .SUCESSO {
    background-color: #23bf30;
  }

  .ALERTA {
    background-color: #ff7700;
  }

  .NOTIFICACAO {
    background-color: #111;
  }

  .mensagemNotificacaoDiv {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    width: 275px;
    max-width: 400px;
    gap: 10px;
    padding: 8px;
    border-radius: 12px 0 12px 12px;
    -webkit-box-shadow: 2px -1px 25px -4px rgba(0, 0, 0, 1.5);
    -moz-box-shadow: 2px -1px 25px -4px rgba(0, 0, 0, 1.5);
    box-shadow: 2px -1px 25px -4px rgba(0, 0, 0, 1.5);

    .icone {
      width: 17px;
      color: var(--white);
      padding: 0;
      position: relative;
      font-size: 1.5rem;
      margin-left: 10px;
    }

    p {
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 500;
      width: 210px;
    }

    button {
      width: 18px;
      padding: 0;
      text-decoration: none;
      color: whitesmoke;
      font-size: 1rem;
      font-weight: 900;
      transition: transform 300ms;
      background-color: transparent;
      border: none;
      cursor: pointer;
      align-self: flex-start;

      svg {
        color: #fff;
        font-size: 1.1rem;
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
