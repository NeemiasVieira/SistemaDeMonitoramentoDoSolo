import styled from "styled-components";

export const EspeciesStyle = styled.main`

min-height: 500px;
background-color: var(--bg-primary);
display: flex;
align-items: center;
flex-flow: column wrap;

.tituloDaPagina{
  margin-top: 0;
  text-align: center;
}

.especies{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 30px;
  margin-bottom: 50px;
}

.createSpecieButton{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  border: solid #aaa 1px;
  width: 200px;
  height: 40px;
  padding: 10px;
  margin: 10px 10px 30px 10px;
  border-radius: 7px;
  background-color: var(--white);
  font-weight: 700;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: .5px;;
  transition: all 200ms;

  svg{
    font-size: 1.2rem;
    color: #333;
  }
}

.createSpecieButton:hover{
  transform: scale(1.05);
}

.buttonVoltar{
  margin-top: 120px;
  margin-right: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--white);
  text-decoration: none;
  width: 100px;
  padding: 10px 15px;
  border-radius: 7px;
  border: solid #aaa 1px;
  color: #000;
  font-size: 1.2rem;

  svg{
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 480px){
    .buttonVoltar{
      position: relative;
      margin: 0;
      width: 20px;
      height: 15px;
      font-size: .8rem;
      top: 100px;
      left: -160px;

      span{
        display: none;
      }
    }

    .createSpecieButton{
      margin-top: 60px;
    }
  }

`