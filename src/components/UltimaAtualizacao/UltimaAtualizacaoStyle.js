import styled from "styled-components";

export const UltimaAtualizacaoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  border: solid #000 1px;
  padding: 40px 80px;
  border-radius: 15px;

  .DadosAtuais {
    display: flex;
    flex-flow: row nowrap;
    gap: 10vw;
    max-width: 800px;
  }

  .icons {
    width: 75px;
    height: 75px;
  }

  .dadosTempUmidPH {
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    gap: 15px;
    width: 300px;
    font-size: 1.3rem;
  }

  .GraficoDeBarras {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
  }

  .DivTempUmidPH {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    gap: 10px;
    width: auto;

    p {
      font-weight: 600;
      margin: 5px;
    }

    .InfoUltimaAtualizacao {
      color: rgb(117, 117, 117);
      font-size: 12px;
      font-weight: 300;
      margin-top: 15px;
    }
  }

  .dados {
    margin-top: 30px;
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
  }

  @media screen and (max-width: 480px) {
    .DadosAtuais {
      flex-flow: column wrap;
      max-width: 430px;
      justify-content: center;
      align-items: center;
    }

    .DivTempUmidPH {
      align-items: center;
      justify-content: center;
      width: 90vw;
    }
  }
`;
