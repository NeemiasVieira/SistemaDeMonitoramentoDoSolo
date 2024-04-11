import styled from "styled-components";


export const BotaoVoltarStyle = styled.div`

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

@media screen and (max-width: 480px) {

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
  
}


`



