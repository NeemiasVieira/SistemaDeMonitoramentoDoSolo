import styled from "styled-components";

export const HomeStyle = styled.main`
  min-height: 93vh;
  overflow-x: hidden;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    margin: 25px 0 25px 0;
    text-align: center;
    color: black;
  }

  .introducao {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    gap: 2vw;
    border-radius: 10px;
    padding: 20px;
    justify-content: center;
    margin: 0 0 25px 0;
  }

  .introducaoTexto {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
    width: 60vh;
    font-weight: 700;
    font-size: 1.3em;
  }

  .IntroducaoLadoDireito {
    width: 42vw;
    padding: 3vh 3vw;
  }

  .IntroducaoContent {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    width: 100vw;

    img {
      width: 55vw;
      height: 93vh;
      border-right: solid #ccc 3px;
    }
  }

  .saibaMais {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #111;
    width: 200px;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    font-size: 1.1rem;
    transition: all 200ms;
    :hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {
    min-height: 60vh;

    h1 {
      margin: 25px 0 0 0;
      font-size: 1.5rem;
      padding: 0 5vw;
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
    }

    .saibaMais {
      margin-bottom: 50px;
    }

    .introducaoTexto {
      font-size: 1em;
      max-width: 85vw;
      padding: 10px;
      height: 22vh;
    }

    .IntroducaoContent {
      margin: 50px 0 0 0;
      flex-flow: column wrap;
      img {
        width: 100vw;
        height: 200px;
      }
    }
  }
`;
