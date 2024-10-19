import styled from 'styled-components';

export const TodosOsRegistrosStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 50px;

  .newRecordButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    color: var(--text-primary);
    border: solid var(--border-primary) 1px;
    width: 200px;
    height: 40px;
    padding: 10px;
    margin: 10px 10px 30px 10px;
    border-radius: 7px;
    background-color: var(--light-green);
    font-weight: 700;
    box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: all 200ms;

    svg {
      font-size: 1.2rem;
      color: var(--text-primary);
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (max-width: 480px) {
    margin-top: 100px;
  }
`;
