import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0); 
    opacity: 1;
  }
`;

export const NotificacoesStyle = styled.div`
  position: absolute;
  max-width: 375px;
  width: 325px;
  display: flex;
  flex-flow: column-reverse wrap;
  color: whitesmoke;
  font-weight: 700;
  position: fixed;
  top: 10.5%;
  right: -1%;
  z-index: 2;
  background-color: transparent;
  border-radius: 20px;

  .ERRO {
    background-color: #a22;
  }

  .SUCESSO {
    background-color: #11bb11;
  }

  .ALERTA {
    background-color: #ff7700;
  }

  .NOTIFICACAO {
    background-color: #111;
  }

  .notificacao:last-child {
    margin-top: 0;
  }

  .notificacao {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    width: 275px;
    margin-top: 15px;
    max-width: 400px;
    padding: 8px;
    border-radius: 9px 0 9px 9px;
    box-shadow: 2px -1px 30px -4px #000;
    animation: ${slideIn} 0.3s ease-out;
    transition: margin 0.5s ease-out;
    .icone {
      width: 17px;
      color: var(--white);
      padding: 0;
      font-size: 1.5rem;
      margin-left: 10px;
    }

    p {
      color: var(--white);
      font-size: 0.8rem;
      font-weight: 500;
      width: 78%;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 1rem;
      font-weight: 900;
      transition: all 300ms;
      background-color: transparent;
      border: none;
      cursor: pointer;
      align-self: flex-start;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  @media screen and (max-width: 480px) {
    top: 13.5%;
    right: -7%;
  }
`;
