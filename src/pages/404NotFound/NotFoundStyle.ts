import styled from "styled-components";

export const NotFoundStyle = styled.main`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  min-height: 80vh;

  h1{
    letter-spacing: 3px;
    font-size: 5rem;
    margin: 0;
  }

  svg{
    font-size: 7rem;
    color: var(--dark-green);
    margin: 0;
  }

  span{
    font-size: 1.7rem;
    color: #555;
  }
`