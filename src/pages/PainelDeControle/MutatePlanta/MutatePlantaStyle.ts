import styled from 'styled-components';

export const MutatePlantStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin: 25px 0;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
  }

  .inputNome,
  .inputEspecie {
    input {
      color: var(--text-primary);
      background-color: var(--button-primary);
      margin-top: 5px;
      margin-bottom: 5px;
      width: 180px;
      height: 20px;
      padding: 5px 0;
      border-radius: 5px;
      border: none;
      text-align: center;
      font-size: 1rem;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    width: 100vw;
    gap: 15px;
    margin-top: 30px;
  }

  .createButton,
  .updateButton,
  .backButton {
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
  }

  .createButton:hover,
  .updateButton:hover,
  .backButton:hover {
    transform: scale(1.1);
  }

  .createButton {
    background-color: var(--light-green);
  }
  .updateButton {
    background-color: #ffa520;
  }

  .criarAtualizarButton:hover {
    transform: scale(1.1);
  }
`;
