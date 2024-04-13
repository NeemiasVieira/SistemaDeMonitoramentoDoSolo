import styled from "styled-components";

export const CadastroConcluidoMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  section {
    background: #fff;
    width: 500px;
    height: 200px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: solid #ccc 1px;
    gap: 20px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
  }

  h2 {
    color: #000;
    margin: 0;
    font-weight: 500;
  }

  .icone {
    font-size: 4em;
    color: var(--dark-green);
  }

  .link {
    color: #000;
    width: 150px;
    font-size: 1.2em;
    font-weight: 600;
    text-decoration: none;
    border: solid #aaa 1px;
    border-radius: 5px;
    background: var(--white);
    text-align: center;
    padding: 5px 0;
    transition: transform 300ms;
  }

  .link:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px){

    h2{
      font-size: 1.2rem;
      text-align: center;
    }

    section{
      max-width: 70vw;
      padding: 20px;
    }
  }
`;
