import styled from "styled-components";

export const NotificacaoStyle = styled.section`
    max-width: 350px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: whitesmoke;
    font-weight: 700;
    position: fixed;
    top: 1.5%;
    right: 1%;
    z-index: 2;
    transition: all 200ms;
    background-color: transparent;
    border-radius: 20px;

  .ERRO{
    background-color: #f44;
  }

  .SUCESSO{
    background-color: var(--dark-green);
  }

  .ALERTA{
    background-color: #faa700;
  }

  .NOTIFICACAO{
    background-color: #222;
  }
  

  h2 {
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    margin: 0;
  }


.mensagemNotificacaoDiv{

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  padding: 8px 15px;
  border-radius: 10px;
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
  box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);


  .icone {
    max-width: 25px;
    color: #fff;
    padding: 0;
  }

  p {
    color: #fff;
    font-size: .8rem;
    font-weight: 500;
  }
}



  button {
    margin: 0;
    max-width: 35vw;
    text-decoration: none;
    color: whitesmoke;
    font-size: 1em;
    font-weight: 900;
    margin: 20px 0 30px 0;
    transition: transform 300ms;
    background-color: inherit;
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {

  }
`;
