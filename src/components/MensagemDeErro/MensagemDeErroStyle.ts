import styled from "styled-components";

export const MensagemErroStyle = styled.section`
    max-width: 350px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    color: whitesmoke;
    border-radius: 10px;
    background-color: #f44;
    padding: 5px;
    position: fixed;
    top: 2%;
    right: 1%;
    z-index: 2;
    transition: all 200ms;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
    box-shadow: 2px -1px 25px -6px rgba(0,0,0,0.75);
  

  h2 {
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    text-align: center;
    color: #fff;
    padding: 10px 0;
    margin: 0;
  }


.mensagemErroDiv{

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  padding: 0 10px;

  .icone {
    max-width: 25px;
    color: #fff;
    padding: 0;
  }

  p {
    color: #fff;
    font-size: .8rem;
    font-weight: 500;
  }
}



  button {
    margin: 0;
    max-width: 35vw;
    text-decoration: none;
    color: whitesmoke;
    font-size: 1em;
    font-weight: 900;
    margin: 20px 0 30px 0;
    transition: transform 300ms;
    background-color: inherit;
    border: none;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {

  }
`;
