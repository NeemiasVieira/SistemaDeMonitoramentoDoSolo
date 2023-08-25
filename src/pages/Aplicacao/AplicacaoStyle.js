import styled from "styled-components";

export const AplicacaoMain = styled.main`
  min-height: 93vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  .SecaoIntroducao{
    display: flex;
    flex-flow: row nowrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 60vw;

    p{
      margin: 0 0 10px 0;
      font-weight: 500;
    }

    svg{
      font-size: 7em;
    }
  }

  .introducaoTexto{
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: initial;
    font-size: 1.1rem;
    max-width: 600px;
    
  }

  @media screen and (max-width: 480px){

    min-height: 80vh;
    

    .SecaoIntroducao{
      width: 90vw;
      flex-flow: row wrap;
      padding: 0 10px;
      font-size: 14px;
      gap: 15px;
      margin-top: 25px;

      svg{
        font-size: 5em;
      }
    }
  }

`