import styled from "styled-components";

export const PaginacaoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  margin: 15px 0 50px 0;

  span {
    color: var(--text-secondary);
  }

  select {
    background-color: var(--white);
    color: var(--text-primary);
    padding: 2px;
    border-radius: 5px;
    cursor: pointer;
  }

  svg {
    padding: 5px 10px;
    background-color: var(--dark-green);
    border-radius: 5px;
    color: #000;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: all 200ms;
  }

  button:hover {
    transform: scale(1.05);
  }
`;
