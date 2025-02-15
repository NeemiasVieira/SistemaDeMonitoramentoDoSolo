import styled from 'styled-components';

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

  .content {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  p {
    color: var(--text-secondary);
    font-style: italic;
    letter-spacing: 0.5px;
  }
  .imageIcon {
    font-size: 1.5rem;
    color: var(--text-secondary);
  }

  .imageIcon,
  .imageSpan {
    width: 40px;
  }

  .details {
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
  .details:hover {
    transform: scale(1.1);
  }

  .actions {
    display: flex;
    gap: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 75vw;
    padding: 0 20px;
    min-width: 10px;
    gap: 10px;
    flex-flow: column wrap;
    padding: 10px 20px;

    .content {
      padding: 5px;
      width: 100%;
      justify-content: space-evenly;
    }

    h2 {
      margin: 0;
    }

    p {
      font-size: 1rem;
      margin: 0;
    }

    span {
      width: 20px;
    }

    .details {
      width: 100px;
      height: 40px;
      padding: 0 10px;
      font-size: 0.8rem;
    }
    .actions {
      padding: 5px;
      gap: 8px;
    }
  }
`;
