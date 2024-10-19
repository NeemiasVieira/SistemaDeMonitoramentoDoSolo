import styled from 'styled-components';

export const SelecionarImagemRegistroStyle = styled.main`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 50px;
  min-height: 65vh;
  padding: 0 10%;

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

  .content {
    display: flex;
    flex-flow: row nowrap;
    gap: 25px;
    min-height: 250px;
  }

  input {
    display: none;
  }

  img {
    max-width: 200px;
    max-height: 200px;
    border: solid var(--border-primary) 2px;
    border-radius: 10px;
  }

  .placeHolderLogo {
    width: 150px;
    height: 150px;
    padding: 25px;
    color: var(--text-secondary);
    border: solid var(--border-primary) 2px;
    border-radius: 10px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 8px;
    background-color: var(--button-primary);
    padding: 10px;
    border-radius: 10px;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 200ms;
    border: solid var(--border-primary) 1px;
    &:hover {
      transform: scale(1.05);
    }
  }

  .envio {
    width: fit-content;
    min-width: 220px;
  }

  .visualizacao {
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    flex-flow: column wrap;
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
