import styled from "styled-components";

export const PainelAdmStyle = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--bg-primary);

  h2 {
    margin: 0 0 80px 0;
    text-align: center;
  }

  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: auto;
    height: auto;
    gap: 25px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

  .botaoMenu {
    width: 350px;
    height: 150px;
    border: solid #c4c4c4 1px;
    border-radius: 8px;
    background-color: var(--white);
    cursor: pointer;

    svg {
      font-size: 2rem;
      color: #555;
      margin-bottom: 10px;
    }

    h3 {
      margin: 5px;
    }

    p {
      margin: 0;
      color: #888;
    }
  }

  .botaoMenu:hover {
    border: solid #222 1px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;

    h2 {
      margin-top: 100px;
      margin-bottom: 30px;
    }
    .botaoMenu {
      width: 170px;
      height: 85px svg {
        font-size: 2rem;
      }

      h3 {
        font-size: 0.8rem;
      }
      p {
        font-size: 0.7rem;
      }
    }
  }
`;
