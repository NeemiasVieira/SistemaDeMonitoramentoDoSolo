import styled from 'styled-components';

export const TodosOsRegistrosStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    margin-top: 100px;
  }
`;
