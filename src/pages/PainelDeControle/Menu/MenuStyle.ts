import styled from "styled-components";

export const PainelMenuStyle = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--bg-primary);

  h2 {
    margin-bottom: 30px;
    text-align: center;
    color: var(--text-primary);
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
    border: solid var(--border-primary) 1px;
    border-radius: 8px;
    background-color: var(--contrast);
    cursor: pointer;

    svg {
      font-size: 2rem;
      color: var(--text-secondary);
      margin-bottom: 10px;
    }

    h3 {
      margin: 5px;
      color: var(--text-primary);
    }

    p {
      margin: 0;
      color: var(--text-secondary);
    }
  }

  .botaoMenu:hover {
    border: solid var(--border-hover) 1px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 30px;

    h2 {
      margin-top: 60px;
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
