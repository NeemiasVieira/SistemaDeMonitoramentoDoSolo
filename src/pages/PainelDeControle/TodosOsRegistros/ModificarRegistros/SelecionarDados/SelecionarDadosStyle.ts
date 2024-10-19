import styled from 'styled-components';

export const SelecionarDadosRegistroStyle = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 50px;
  min-height: 65vh;
  padding: 0 10%;

  .data {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 50%;
  }

  .dataAndParams {
    display: flex;
    flex-flow: row nowrap;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 5px;
    margin-top: 5px;

    span {
      width: 70%;
    }
    input {
      border: solid var(--border-primary) 1px;
      border-radius: 5px;
      background-color: var(--button-primary);
      color: var(--text-primary);
      width: 30%;
      max-width: 400px;
      font-size: 1.3rem;
      padding: 2px;
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 50px;
  }

  section {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    border: solid var(--border-primary) 1px;
    border-radius: 20px;
    padding: 30px;
    gap: 30px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    max-width: 680px;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row nowrap;
      gap: 5px;
      border: solid var(--border-primary) 1px;
      width: 200px;
      height: 40px;
      padding: 10px;
      margin: 10px;
      border-radius: 7px;
      background-color: var(--contrast);
      font-weight: 700;
      box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
      color: var(--text-primary);
      cursor: pointer;
      font-size: 1rem;
      letter-spacing: 0.5px;
      transition: all 200ms;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
