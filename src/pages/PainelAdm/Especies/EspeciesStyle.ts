import styled from 'styled-components';

export const EspeciesStyle = styled.main`
  margin-top: 50px;
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  flex-flow: column wrap;

  .tituloDaPagina {
    margin-top: 0;
    text-align: center;
  }

  .especies {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 30px;
    margin: 30px 0 50px 0;
  }

  @media screen and (max-width: 480px) {
    margin-top: 100px;
    .createSpecieButton {
      margin-top: 10px;
    }
  }
`;
