import styled from "styled-components";

export const MinhaPlantaMain = styled.main`
  min-height: 91vh;
  margin: 10vh 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;


  h1{
    font-size: 20px;
    margin-bottom: 50px;
  }

  .DadosAtuais{
    display: flex;
    flex-flow: row nowrap;
    gap: 10vw;
    max-width: 800px;
    margin-bottom: 50px;
  }

  .DivTempUmidPH{
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    gap: 5px;
    width: auto;   
    font-family: Roboto;

    h3, h4, p{
      margin: 0;
    }

    h3{
      font-size: 16px;
      font-weight: 400;
    }
    h4{
      font-size: 14px;
      color: rgb(117, 117, 117);
      font-weight: 300;
    }
    
    p{
      font-weight: 600;
    }
    
    .UltimaAtualizacao{
      color: rgb(117, 117, 117);
      font-size: 12px;
      font-weight: 300;
      margin-top: 15px;
    }

  }

  .dados{
    margin-top: 30px;
    display: flex;
    flex-flow: column wrap;
    gap: 5px;
  }


select {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto; 
  padding: 15px;
  font-size: 16px;
  border: 1px solid #bbb; 
  border-radius: 5px;
  background-color: #fff; 
  color: #333;
}

  @media screen and (max-width: 480px){
    .DadosAtuais{
      flex-flow: column wrap;
      max-width: 430px;
      justify-content: center;
      align-items: center;
    }

    .DivTempUmidPH{
      align-items: center;
      justify-content: center;
      width: 90vw;
    }
  }

`