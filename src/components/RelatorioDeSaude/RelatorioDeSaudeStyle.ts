import styled from "styled-components";

export const RelatorioDeSaudeStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  gap: 20px;

  .titulo {
    letter-spacing: 3px;
    font-weight: 700;
    margin: 10px 0;
    font-size: 30px;
  }

  .feliz1,
  .feliz2,
  .triste,
  .neutro {
    align-self: center;
    svg {
      font-size: 2rem;
      margin-bottom: 10px;
    }
  }

  .triste {
    color: #f22;
  }

  .feliz1,
  .feliz2 {
    color: #0f4;
  }

  .neutro {
    color: #ff3;
  }

  .bolinha {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .bolinha-verde {
    background-color: green;
  }

  .bolinha-amarela {
    background-color: yellow;
  }

  .bolinha-vermelha {
    background-color: red;
  }

  .legenda {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 8px;
    background-color: var(--white);
    width: 400px;
    border-radius: 20px;
    padding: 10px;

    h3 {
      letter-spacing: 2px;
      margin: 5px 0;
      font-weight: 500;
    }
  }

  .valoresLegenda {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 30px;
    margin: 0;
    padding: 0;

    p {
      margin: 0;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row nowrap;
    }
  }

  .SaudeEAlertas {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    background-color: var(--white);
    border-radius: 15px;
  }

  .Saude {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 10px;
    padding: 35px;
    border-right: solid var(--bg-primary) 2px;

    h3 {
      font-weight: 500;
      letter-spacing: 2px;
      margin: 0;
    }

    p {
      margin: 2px;
    }
  }

  .alertas {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: fit-content;
    gap: 10px;
    padding: 35px;

    h3 {
      text-align: center;
      font-weight: 500;
      letter-spacing: 2px;
      margin: 0;
    }
  }

  button{
    background-color: transparent;
    cursor: pointer;
    border: solid var(--gray-primary) 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; 
    letter-spacing: 1px;
    background-color: var(--white);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.1rem;

  }

  @media screen and (max-width: 480px) {
    gap: 10px;

    .SaudeEAlertas {
      flex-flow: column wrap;
      gap: 10px;
    }

    h1 {
      margin: 5px;
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 80vw;
    padding: 25px;
  }
`;
