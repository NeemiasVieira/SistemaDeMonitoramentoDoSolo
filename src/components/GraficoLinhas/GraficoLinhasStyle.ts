import styled from "styled-components";

export const SecaoGraficoLinhas = styled.section`
  width: 70vw;
  max-width: 900px;

  .titulo {
    letter-spacing: 3px;
    font-weight: 700;
    margin: 10px 0;
    font-size: 30px;
  }

  .filtros{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  

    h3{
      margin: 10px;
    }
  }

  .selects{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 15px;
    margin-bottom: 20px;
    background-color: var(--white);
    padding: 10px 20px;
    border-radius: 15px;
  }

  .Select{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 10px;
  }

  .selectFiltro{
    margin: 0;
    height: 40px;
    padding: 5px;
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

  .graficoContainer{
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 35px;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
  }

  @media screen and (max-width: 480px) {
    width: 100vw;
    max-width: 470px;

    .titulo{
      font-size: 1.7rem;
    }

    .selects{
      margin-top: 20px;
      flex-flow: column wrap;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 15px;
      background-color: transparent;
    }

    .Select{
      flex-flow: row nowrap;
    }
  }
`