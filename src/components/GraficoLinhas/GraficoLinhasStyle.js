import styled from "styled-components";

export const SecaoGraficoLinhas = styled.section`
  width: 70vw;
  max-width: 900px;

  .selects{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 15px;
    margin-bottom: 10px;
  }

  .Select{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 10px;

    select{
      margin: 0;
      padding: 10px;
    }
  }

  h2{
    text-align: center;
  }

  .Aviso{
    text-align: center;
  }
  .tituloSelect{
    max-width: 185px;
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    max-width: 470px;

    .selects{
      flex-flow: column wrap;
      align-items: flex-start;
      margin-bottom: 20px;
      padding: 0 15px;
    }

    .Select{
      flex-flow: row nowrap;
    }
  }
`