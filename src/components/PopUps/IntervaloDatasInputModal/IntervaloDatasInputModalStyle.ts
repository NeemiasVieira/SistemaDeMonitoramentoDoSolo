import styled from "styled-components";

export const IntervaloDataInputModalStyle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  gap: 10px;

  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 20px;
  }

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--white);
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 7px;
    border: solid #aaa 1px;
    color: #000;
    font-size: 1.2rem;
    width:  150px;
    margin-top: 20px;
    transition: all 200ms;
    cursor: pointer;  

    svg {
      font-size: 1.2rem;
    }
  }

  button:hover{
    transform: scale(1.1);
  }

  .closeButton{
  position: absolute;
  right: 20px;
  top: 0px;
  font-size: 1rem;
  background-color: #f44;
  border-radius: 10px;
  border: none;
  color: #fff;  
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media screen and (max-width: 480px){
  .closeButton{
    font-size: .7rem;
  }
}

`

export const IntervaloDataInputStyle = styled.div`

.openButton{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: var(--white);
    text-decoration: none;
    padding: 5px 15px;
    border-radius: 7px;
    border: solid #aaa 1px;
    color: #000;
    font-size: 1.2rem;
    width:  200px;
    font-size: 1rem;
    margin: 10px 0;
    transition: all 200ms;
    cursor: pointer;  
  }

  .openButton:hover{
    transform: scale(1.1);
  }

`