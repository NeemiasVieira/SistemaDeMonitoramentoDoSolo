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

  .createPlantButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    color: var(--text-primary);
    border: solid var(--border-primary) 1px;
    width: 200px;
    height: 40px;
    padding: 10px;
    margin: 15px 0;
    border-radius: 7px;
    background-color: var(--light-green);
    font-weight: 700;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: all 200ms;

    svg {
      font-size: 1.2rem;
      color: var(--text-primary);
    }
  }

  .createPlantButton:hover {
    transform: scale(1.05);
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
    gap: 50px;
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

  .avisoSemPlantas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
    margin-top: 80px;
    background-color: var(--contrast);
    border: solid var(--border-primary) 1px;
    border-radius: 10px;
    padding: 15px;

    p {
      color: var(--text-secondary);
      width: 250px;
    }

    svg {
      font-size: 2rem;
      color: #faa520;
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    min-height: 200px;

    .Plantas {
      margin-top: 20px;
      gap: 25px;
    }
  }
`;
