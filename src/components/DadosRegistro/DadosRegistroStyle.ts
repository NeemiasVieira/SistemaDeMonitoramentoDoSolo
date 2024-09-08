import styled from "styled-components";

export const DadosRegistroStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  margin-top: 25px;

  .Infos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 25px;
  }

  .InfoUltimaAtualizacao {
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 1.5px;
    margin-top: 50px;
    color: var(--light-gray);
  }

  .toolTip {
    position: absolute;
    margin: 0 0 145px 55px;
  }

  @media screen and (max-width: 480px) {
    .Infos {
      width: 95vw;
      flex-flow: row wrap;
    }

    .toolTip {
      margin: 0 0 208px 140 px;
    }
  }
`;
