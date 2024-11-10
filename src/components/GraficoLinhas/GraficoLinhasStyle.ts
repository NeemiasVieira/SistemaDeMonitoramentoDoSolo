import styled from 'styled-components';

export const SecaoGraficoLinhas = styled.section`
  width: 80vw;
  max-width: 900px;

  .titulo {
    font-weight: 700;
    margin: 10px 0;
    font-size: 30px;
  }

  .filtros {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;

    h3 {
      margin: 10px;
    }
  }

  .selects {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 15px;
    margin-bottom: 20px;
    background-color: var(--contrast);
    padding: 10px 20px;
    border-radius: 15px;
  }

  .Select {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 10px;
  }

  h2 {
    text-align: center;
  }

  .Aviso {
    text-align: center;
  }
  .tituloSelect {
    max-width: 185px;
  }

  .graficoContainer {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--white);
    border-radius: 10px;
    margin-bottom: 35px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 480px) {
    width: calc(100% - 40px);
    padding: 0 20px;
    max-width: 470px;

    .selects {
      flex-flow: column wrap;
      justify-content: start;
      align-items: flex-end;
      padding: 20px 20px;
      margin-bottom: 30px;
      gap: 20px;
      font-size: 14px;
    }

    h3 {
      display: none;
    }

    .titulo {
      font-size: 1.5rem;
      padding: 20px 25px;
    }

    .tituloSelect {
      margin: 8px 0;
    }

    .Aviso {
      padding: 30px;
      color: var(--text-secondary);
    }
  }
`;
