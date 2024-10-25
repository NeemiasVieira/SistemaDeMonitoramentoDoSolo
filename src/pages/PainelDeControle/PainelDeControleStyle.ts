import styled from 'styled-components';

export const PainelDeControleStyle = styled.main`
  overflow-x: hidden;
  background-color: var(--bg-primary);
  width: 100vw;
  display: flex;
  margin-top: 30px;
  align-items: center;
  flex-flow: column wrap;
  min-height: 75vh;

  h1 {
    font-size: 1.5em;
    text-align: center;
  }
  h2 {
    font-size: 1em;
    font-weight: 600;
    margin: 10px 0;
    width: 90%;
  }

  .subTitulo {
    color: var(--text-secondary);
  }

  h1,
  h2 {
    text-align: center;
  }

  .Plantas {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 20px;
    margin-bottom: 20px;
  }

  .divPlantas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 25px;
  }

  .suasPlantas {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    min-height: 200px;

    h1,
    h2 {
      max-width: 85vw;
    }

    .Plantas {
      margin-top: 20px;
      gap: 25px;
    }
  }
`;
