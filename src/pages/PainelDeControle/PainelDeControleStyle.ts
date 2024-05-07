import styled from "styled-components";

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
  }

  .subTitulo {
    color: var(--text-secondary);
  }

  h1,
  h2 {
    text-align: center;
  }

  .Plantas {
    margin-top: 50px;
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

  .avisoSemPlantas{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
    margin-top: 80px;
    background-color: var(--white);
    border: solid var(--border-primary) 1px;
    border-radius: 10px;
    padding: 15px;

    p{
      color: var(--text-secondary);
      width: 250px;
    }
    
    svg{
      font-size: 2rem;
      color: #faa520
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 40px;
    min-height: 200px;

    .Plantas {
      margin-top: 25px;
      gap: 25px;
    }
  }
`;
