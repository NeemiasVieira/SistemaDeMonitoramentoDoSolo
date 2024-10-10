import styled from "styled-components";

export const RegistroStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row nowrap;
  gap: 20px;
  background-color: var(--contrast);
  margin: 10px 0;
  width: 50vw;
  min-width: 500px;
  max-width: 600px;
  border-radius: 10px;
  border: solid var(--border-primary) 1px;

  p {
    color: var(--text-secondary);
    font-style: italic;
    letter-spacing: 0.5px;
  }
  svg {
    font-size: 1.5rem;
    color: var(--text-secondary);
  }

  svg,
  span {
    width: 40px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: solid var(--border-primary) 1px;
    background-color: var(--contrast);
    border-radius: 5px;
    width: 120px;
    padding: 7px 0;
    cursor: pointer;
    transition: all 200ms;
    font-size: 0.9rem;
    color: var(--text-primary);
    font-weight: 700;
  }
  button:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
    padding: 0 20px;
    min-width: 10px;

    p {
      font-size: 0.7rem;
      width: 220px;
    }

    span {
      width: 20px;
    }

    button {
      width: 125px;
      height: 40px;
      padding: 0 10px;
      font-size: 0.8rem;
    }
  }
`;
