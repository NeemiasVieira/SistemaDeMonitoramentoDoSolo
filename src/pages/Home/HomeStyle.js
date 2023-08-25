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
    width: 350px;
    height: 350px;
    border-radius: 2px;
  }

  .introducao {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 2vw;
    justify-content: center;
  }

  .introducaoTexto {
    height: 30vh;
    width: 60vh;
    color: rgb(16, 187, 64);
    font-weight: 700;
    font-size: 1.3em;
  }

  .IntroducaoContent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  .saibaMais{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #111;
    width: 200px;
    height: 50px;
    border-radius: 15px 5px 15px 5px;
    color: #fff;
    font-size: 1.1rem;
    transition: all 200ms;
    :hover{
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {

    min-height: 60vh;

    h1 {
      margin-top: 12.5vh;
      font-size: 1.3em;
    }

    .manjericao {
      width: 150px;
      height: 150px;
    }

    .introducao {
      flex-flow: column wrap;
      gap: 0;
      margin-bottom: 0;
      overflow: hidden;
    }

    .saibaMais{
      margin-bottom: 50px;
    }

    .introducaoTexto {
      font-size: 1em;
      max-width: 85vw;
      padding: 10px;
      height: 22vh;
    }
  }
`;
