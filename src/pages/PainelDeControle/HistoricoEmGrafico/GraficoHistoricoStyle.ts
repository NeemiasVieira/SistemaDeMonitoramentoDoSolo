import styled from "styled-components";

export const PagGraficoHistoricoStyle = styled.main`
  min-height: 50vh;
  padding: 0 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  @media screen and (max-width: 480px){
    .GraficoDiv{
      margin-top: 90px;
    }
  }

`