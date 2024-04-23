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

  .nuRegistro {
    font-size: 4rem;
    font-weight: 700;
    margin: 10px 0 30px 0;
    text-align: center;
    width: 150px;
    background-color: var(--white);
    padding-left: 10px;
    border-radius: 10px;

  }

  .DadosSensores {
    background-color: var(--white);
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 30px;
  }

  .imagemEDiagnosticoDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    background-color: var(--white);
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
      background-color: #fff;
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

  .botaoSaude{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    color: #000;
    font-size: 1rem;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 5px;
    border: solid #aaa 1px;
    transition: all 200ms;
    gap: 5px;
  }

  .botaoSaude:hover{
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px){

    margin-top:60px;

    .DadosSensores {
    max-width: 90vw;
    padding: 0;
    border-radius: 8px;
  }

  .imagemEDiagnostico{
    flex-flow: column wrap;

    img{
      width: 200px;
      height: 200px;
    }

    img:hover{
      transform: scale(1.3);
    }
  }
  }
`;
