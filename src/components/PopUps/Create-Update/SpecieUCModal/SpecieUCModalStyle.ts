import styled from "styled-components";

export const SpecieUCModalStyle = styled.div`

`

export const SpecieUCModalStyleIndex = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;

 .closeButton {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1rem;
    background-color: #f44;
    border-radius: 10px;
    border: none;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .DivInputNome,
.DivInputDescricao,
.DivInputParametro {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  flex-flow: row nowrap;
  font-size: .8rem;
  padding: 5px 20px;
  border-radius: 7px;
}

.DivInputParametro {
  display: flex;
}

.DivInputParametro input {
  margin-top: 5px;
  margin-bottom: 5px;
  width: 50px;
}

.DivInputParametro p {
  margin: 0;
  width: 80px;
}

.DivInputParametro label {
  margin: 0 10px 0px 10px;
}

.DivInputNome p, .DivInputDescricao p{
  width: 70px
}

.DivInputNome input{
  width: 70%;
}

.DivInputDescricao textarea{
  border: solid #333 1px;
  border-radius: 5px;
}

.DivInputNome input, .DivInputDescricao input, .DivInputParametro input{
  border: solid #333 1px;
  border-radius: 5px;
}

.criarAtualizarButton{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  border: solid #222 1px;
  width: 200px;
  height: 40px;
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
  background-color: var(--white);
  font-weight: 700;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: .5px;;
  transition: all 200ms;
}

.criarAtualizarButton:hover{
  transform: scale(1.1);
}


`