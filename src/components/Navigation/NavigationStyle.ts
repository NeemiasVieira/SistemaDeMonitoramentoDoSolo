import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  background-color: #fff;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: solid #ccc 2px;
  z-index: 1;

  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao .selecionado{
    padding: 4px 10px -1px 10px;
    border-bottom: solid var(--light-green) 4px;
  }

  .navegacao {
    width: 95%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 35px;
    flex-flow: row;
    margin: 0;
    height: 70px;
  }

  .navegacao li{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 0px;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--gray-primary);
    text-decoration: none;
    font-weight: 700;
    transition: all 100ms;
  }

  .navegacao .botaoLogin{
    position: fixed;
    right: 50px;
  }

  @media screen and (max-width: 480px){
    display: none;
  }

  `

  export const NavStyleMobile = styled.nav`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    background-color: var(--white);
    border-bottom: solid #ccc 2px;
    z-index: 1;

    img{
      margin-left: 20px;
    }

    .botaoToggleDropDown{
      background-color: transparent;
      border: none;
      cursor: pointer;  
      margin: 0 25px 0 0;
     
      svg{
        font-size: 1.8rem;
        padding: 0; 
      }
    }
  
  @media screen and (min-width: 481px){
    display: none;
  }
  
  `