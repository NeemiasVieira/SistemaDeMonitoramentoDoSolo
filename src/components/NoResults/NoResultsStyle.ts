import styled from 'styled-components';

export const NoResultsStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  gap: 10px;
  background-color: var(--contrast);
  border: solid var(--border-primary) 1px;
  border-radius: 10px;
  padding: 30px;

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

  ul {
    margin: 5px 0;
    padding-inline-start: 30px;
  }
`;
