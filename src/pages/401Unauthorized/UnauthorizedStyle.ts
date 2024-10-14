import styled from "styled-components";

export const UnauthorizedStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: 80vh;

  h1 {
    letter-spacing: 5px;
    font-size: 5rem;
    margin: 0;
    color: var(--text-primary);
  }

  svg {
    font-size: 7rem;
    color: var(--red);
    margin: 0;
  }

  span {
    font-size: 1.7rem;
    color: var(--text-secondary);
  }
`;
