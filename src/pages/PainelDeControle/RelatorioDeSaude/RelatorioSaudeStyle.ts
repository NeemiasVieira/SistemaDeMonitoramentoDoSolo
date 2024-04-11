import styled from "styled-components";

export const PagRelatorioDeSaudeStyle = styled.main`
  min-height: 50vh;
  padding: 0 0 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

  @media screen and (max-width: 480px){
    .relatorioSaudeDiv{
      margin-top: 130px;
    }

  }
`