import styled from "styled-components";

export const RelatorioDeSaudeStyle = styled.section`
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  gap: 50px;
  border: solid #000 1px;
  border-radius: 10px;
  padding: 35px;

  .triste {
    color: #f22;
  }

  .feliz1, .feliz2{
    color: #0f4;
  }

  .neutro{
    color: #ff3;
  }  

  .bolinha {
  display: inline-block;
  width: 10px; 
  height: 10px; 
  border-radius: 50%; 
  margin-right: 8px; 
}

.bolinha-verde {
  background-color: green;
}

.bolinha-amarela {
  background-color: yellow; 
}

.bolinha-vermelha {
  background-color: red; 
}

.SaudeEAlertas{
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 50px;
}

.Saude{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 5px;
}

.alertas{
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    height: fit-content;
    gap: 10px;

    h1{
        text-align: center;
    }
}


  .RelatorioCore {
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 75px;
  }

  .estadoGeral {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    svg {
      font-size: 6rem;
    }
  }


  @media screen and (max-width: 480px) {

    gap: 10px;

    .RelatorioCore{
        flex-flow: column wrap;
        gap: 10px;
        margin-left: 0;
    }

    .SaudeEAlertas{
        flex-flow: column wrap;
        gap: 10px;
    }

    .estadoGeral{
        margin-top: 20px;
    }

    h1{
        margin: 5px;
    }
  }

`;
