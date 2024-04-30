import styled from "styled-components";

export const AplicacaoMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: var(--bg-primary);
  justify-content: center;
  min-height: 80vh;

  .SecaoIntroducao {
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    width: 60vw;

    p {
      margin: 0 0 10px 0;
      font-weight: 500;
      color: var(--text-secondary);
    }

    svg {
      font-size: 7em;
    }
  }

  .introducaoTexto {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: initial;
    font-size: 1.1rem;
    width: 50vw;
    min-width: 400px;
    max-width: 500px;
    color: #444;
    letter-spacing: 1px;
  }

  @media screen and (max-width: 480px) {
    justify-content: flex-start;
    margin-top: 10px;
    padding: 50px 10px 0 10px;
    min-height: 50vh;

    .SecaoIntroducao {
      width: 90vw;
      flex-flow: column wrap;
      padding: 0 10px;
      font-size: 14px;
      gap: 30px;
      margin-top: 25px;

      svg {
        font-size: 5em;
      }
    }

    .introducaoTexto {
      font-size: 1rem;
      line-height: 20px;
      padding: 0 20px;
      width: 80vw;
      min-width: 250px;
      max-width: 450px;
    }
  }
`;
