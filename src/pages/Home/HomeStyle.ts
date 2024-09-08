import styled from "styled-components";

export const HomeStyle = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  background-color: var(--bg-primary);
  max-width: 100vw;
  overflow-x: hidden;

  h1 {
    font-size: 2.5rem;
    margin: 70px 0 25px 0;
    text-align: center;
    color: var(--text-primary);
    padding: 0 80px;
  }

  .introducao {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 2vw;
    border-radius: 10px;
    padding: 20px 0;
    margin: 0 0 25px 0;
  }

  .introducaoTexto {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 80%;
    font-weight: 700;
    font-size: 1.3rem;
    color: var(--text-secondary);
    letter-spacing: 1px;
  }

  .IntroducaoLadoDireito {
    width: 50vw;
    padding: 0 7vw;
  }

  .IntroducaoContent {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    max-width: 100vw;
    width: 100%;
    overflow: hidden;
    max-height: 93vh;

    img {
      width: 50vw;
      max-width: 1000px;
      height: 93vh;
      border-right: solid var(--border-primary) 3px;
    }
  }

  .saibaMais {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--button-primary);
    text-decoration: none;
    width: 200px;
    padding: 10px 15px;
    border-radius: 7px;
    border: solid var(--border-primary) 1px;
    color: var(--text-primary);
    font-size: 1.2rem;
    transition: all 200ms;

    svg {
      font-size: 1.2rem;
    }
  }

  .saibaMais:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    min-height: 60vh;

    h1 {
      margin: 25px 0 0 0;
      font-size: 1.2rem;
      padding: 0 20px;
    }

    .manjericao {
      width: 150px;
      height: 150px;
    }

    .introducao {
      flex-flow: column wrap;
      gap: 0;
      margin-bottom: 0;
      padding: 0;
      overflow: hidden;
    }

    .IntroducaoLadoDireito {
      width: 100%;
      padding: 0;
      justify-content: center;
    }

    .saibaMais {
      margin: 15px 0 50px 0;
    }

    .introducaoTexto {
      font-size: 0.9rem;
      max-width: 85vw;
      padding: 10px;
      height: auto;
    }

    .IntroducaoContent {
      flex-flow: column wrap;
      max-height: 150vh;
      img {
        width: 100vw;
        height: 350px;
      }
    }
  }
`;
