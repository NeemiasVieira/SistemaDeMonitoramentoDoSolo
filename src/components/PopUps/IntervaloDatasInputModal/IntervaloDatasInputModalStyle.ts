import styled from "styled-components";

export const IntervaloDataInputModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;
  width: 100%;

  input {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: none;
    padding: 10px;
    border-radius: 7px;
    border: solid var(--border-primary) 1px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--light-gray);
    margin-bottom: 10px;

    h3 {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 20px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    margin-top: 20px;
    gap: 15px;
    width: 90%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--contrast);
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 7px;
    border: solid var(--border-primary) 1px;
    color: var(--text-primary);
    font-size: 1.2rem;
    width: 90%;
    transition: all 200ms;
    cursor: pointer;

    svg {
      font-size: 1.2rem;
    }
  }

  button:hover {
    transform: scale(1.1);
  }

  .closeButton {
    font-size: 1rem;
    border: none;
    background-color: transparent;
    color: var(--text-primary);
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  @media screen and (max-width: 480px) {
    .closeButton {
      font-size: 0.7rem;
    }
  }
`;

export const IntervaloDataInputStyle = styled.div`
  .openButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--contrast);
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 7px;
    border: solid var(--border-primary) 1px;
    color: var(--text-primary);
    font-size: 1.2rem;
    width: 200px;
    font-size: 1rem;
    margin: 10px 0;
    transition: all 200ms;
    cursor: pointer;
  }

  .openButton:hover {
    transform: scale(1.1);
  }
`;
