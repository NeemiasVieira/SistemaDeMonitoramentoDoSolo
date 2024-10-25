import styled from 'styled-components';

export const SelecionarDadosRegistroStyle = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 40px;
  min-height: 65vh;
  padding: 0 10%;

  section {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    border: solid var(--border-primary) 1px;
    border-radius: 20px;
    padding: 30px 50px;
    gap: 15px;
    background-color: var(--contrast);
    max-width: 680px;
    margin-bottom: 45px;
  }

  h2 {
    margin: 10px 0;
  }

  .dataAndParams {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }

  .data {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    width: 45%;
    gap: 5px;
  }

  .params {
    width: 55%;
    background-color: var(--contrast);
    padding: 0 20px 20px 20px;
    border-radius: 10px;
  }

  .content {
    display: flex;
    flex-flow: column wrap;

    p {
      margin: 3px;
    }
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 15px;
    margin-top: 5px;

    span {
      width: 70%;
    }
    input {
      border: solid var(--border-primary) 1px;
      border-radius: 5px;
      background-color: var(--button-primary);
      color: var(--text-primary);
      width: 35%;
      max-width: 400px;
      font-size: 1.1rem;
      padding: 5px;
      text-align: center;
    }
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

  @media screen and (max-width: 480px) {
    padding: 0;
    background-color: var(--contrast);
    margin-top: 10px;

    h2 {
      margin-top: 30px;
    }

    section,
    .dataAndParams {
      max-width: 85vw;
      align-items: center;
      border: none;
    }

    .content {
      width: 100%;
      align-items: center;
    }

    section {
      padding: 0;
    }

    .content {
      flex-flow: column wrap;
      gap: 15px;
    }

    .dataAndParams {
      flex-flow: column-reverse wrap;
      padding: 5px 0;
      max-width: 100%;
    }

    .data {
      width: fit-content;
      align-self: flex-start;
      justify-self: flex-start;
    }

    .params {
      width: 100%;
      padding: 0;

      h3 {
        font-size: 1.1rem;
        text-align: start;
      }
    }

    .actions {
      width: 100%;
    }
  }
`;
