import styled from "styled-components";

export const SecaoGraficoLinhas = styled.section`
  width: 70vw;
  max-width: 800px;

  .selects{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 15px;

    select{
      margin: 0;
      padding: 10px;
    }
  }

  h2{
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    max-width: 420px;
  }
`