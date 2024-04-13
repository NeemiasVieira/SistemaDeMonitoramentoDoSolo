import styled from "styled-components";

export const ModalIndexStyle = styled.div`

.closeButton{
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

@media screen and (max-width: 480px){
  .closeButton{
    font-size: .7rem;
  }
}
`