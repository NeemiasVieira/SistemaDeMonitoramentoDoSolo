import styled from 'styled-components';

export const CreateEditStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  color: var(--text-primary);
  background-color: var(--bg-primary);
  margin: 25px 0;

  h2 {
    width: 100%;
    text-align: center;
    margin-bottom: 35px;
  }

  .NomeEDescricao {
    width: auto;
    max-width: 500px;
  }

  .LegendaParametros {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 90%;
    padding: 0px 20px;
    font-weight: 600;
  }

  .leitura {
    width: 80px;
  }

  .actions {
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    width: 100vw;
    gap: 15px;
    margin-top: 30px;
  }

  .DivInputNome,
  .DivInputDescricao,
  .DivInputParametro,
  .DivInputSimulado {
    padding: 5px 20px;
    flex-flow: row nowrap;
    border-radius: 7px;
  }

  .DivInputParametro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    width: 90%;
  }

  .DivInputParametro input {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 80px;
    height: 20px;
    text-align: center;
    font-size: 1rem;
  }

  .DivInputParametro p {
    margin: 0;
  }

  .DivInputDescricao textarea {
    border: solid #333 1px;
    height: 150px;
    border-radius: 5px;
    color: var(--text-primary);
    background-color: var(--button-primary);
  }

  .DivInputNome input {
    height: 25px;
  }

  .DivInputNome input,
  .DivInputDescricao textarea {
    width: 40vw;
    max-width: 400px;
    font-size: 1.3rem;
    padding: 5px;
  }

  .DivInputNome p,
  .DivInputDescricao p,
  .DivInputSimulado p {
    font-weight: 600;
  }

  .DivInputNome input,
  .DivInputDescricao input,
  .DivInputParametro input {
    border: solid #333 1px;
    border-radius: 5px;
    background-color: var(--button-primary);
    color: var(--text-primary);
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

  @media screen and (max-width: 480px) {
    h2 {
      margin: 35px 0 10px 0;
    }

    .DivInputNome input,
    .DivInputDescricao textarea {
      width: 100%;
    }

    .actions {
      width: 80vw;
      gap: 0px;
    }
  }
`;
