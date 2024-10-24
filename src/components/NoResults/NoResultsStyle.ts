import styled from 'styled-components';

export const NoResultsStyle = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
  background-color: var(--contrast);
  border: solid var(--border-primary) 1px;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;

  h3 {
    color: var(--text-primary);
    margin: 5px;
    text-align: center;
  }

  .mainMessage {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 30px;
    width: 400px;
    align-self: center;

    p {
      color: var(--text-secondary);
    }

    svg {
      font-size: 2rem;
      color: var(--text-primary);
    }
  }

  button {
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    padding: 5px;
    gap: 5px;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    font-size: 1rem;
    text-align: center;
    margin-top: 10px;
    background-color: var(--button-primary);
    border: solid var(--border-primary) 1px;
    border-radius: 5px;

    &:hover {
      text-decoration: underline;
    }

    svg {
      transition: transform 200ms ease-out;
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(0deg)' : 'rotate(-90deg)')};
    }
  }

  ul {
    margin: 5px 0;
    padding-inline-start: 30px;
  }

  .dropdown {
    margin-top: 10px;
    max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    max-width: 80vw;
    padding: 20px;

    .mainMessage {
      width: 70vw;
    }
  }
`;
