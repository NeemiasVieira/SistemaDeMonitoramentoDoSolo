import styled from "styled-components";

export const HomeStyle = styled.main`
  min-height: 73.05vh;

  h1 {
    font-size: 50px;
    margin-top: 20vh;
    text-align: center;
    color: black;
  }

  .manjericao {
    width: 400px;
    height: 400px;
    border-radius: 2px;
  }

  .introducao {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 2vw;
    justify-content: center;
    margin-bottom: 19vh;
  }

  .introducaoTexto {
    height: 30vh;
    width: 60vh;
    color: #006400;
    font-weight: 700;
    font-size: 1.2em;
  }

  @media screen and (max-width: 480px) {
    h1 {
      margin-top: 15vh;
      font-size: 1.3em;
    }

    .manjericao {
      width: 300px;
      height: 300px;
    }

    .introducao {
      flex-flow: column wrap;
      gap: 0;
      margin-bottom: 4.2vh;
      overflow: hidden;
    }

    .introducaoTexto {
      font-size: 1em;
      max-width: 85vw;
      padding: 10px;
    }
  }
`;
