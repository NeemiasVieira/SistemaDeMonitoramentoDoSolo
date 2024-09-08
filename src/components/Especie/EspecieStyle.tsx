import styled from "styled-components";

export const EspecieStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  background-color: var(--white);
  width: 800px;
  height: auto;
  border: solid var(--border-primary) 1px;
  border-radius: 10px;
  padding: 10px 20px 0 20px;
  overflow-x: hidden;

  .descricao {
    color: var(--text-secondary);
    height: 70px;
    max-height: 70px;
    overflow: hidden;
    font-size: 0.9rem;
    padding: 0;
    margin-top: 0;
    margin-bottom: 5px;
    background-color: var(--white);
  }

  .titleAndButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }

  .buttonActions {
    display: flex;
    gap: 10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th,
  td {
    border: 1px solid var(--border-primary);
    padding: 2px;
    text-align: left;
    text-align: center;
    font-size: 0.9rem;
    color: var(--text-primary);
  }
  th {
    background-color: var(--white);
    border: solid var(--border-primary) 1px;
  }

  @media screen and (max-width: 480px) {
    width: 85vw;
    height: auto;
    border-radius: 8px;
    padding: 10px 15px 0 15px;

    h3 {
      margin: 15px 0 0 10px;
    }

    .descricao {
      font-size: 0.8rem;
      margin: 15px 0 15px 10px;
      height: 75px;
      max-height: 75px;
    }

    .buttonActions {
      top: -330px;
      right: -76%;
    }
  }
`;
