import styled from "styled-components";

export const NavAutenticadaStyle = styled.nav`
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
  z-index: 1;
  border-bottom: solid #ccc 2px;

  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao .selecionado{
    padding: 4px 10px -1px 10px;
    border-bottom: solid var(--light-green) 4px;
  }

  .navegacao {
    width: 90%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 25px;
    flex-flow: row;
    margin: 0;
    height: 70px;
  }

  .navegacao li{
    display: flex;
  justify-content: center;
  align-items: center;
    height: 100%;  
    padding: 0 10px;
  }

  .botaoPerfil .dropdown {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    cursor: pointer;
  }

  .botaoPerfil {
    margin-right: 40px;
    display: flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 700;
    cursor: pointer;
    background-color: var(--bg-dark-blue);
  }

  .dropdown-content {
    margin-top: 150px;
    margin-right: 150px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 10px 0 10px 10px;
  ul {
      padding: 3px;
    }

  li{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg{
    margin-right  : 5px;
  }

  }
  .dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    display: block;
    text-align: left;
  }
  .dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--gray-primary);
    text-decoration: none;
    font-weight: 700;
    transition: all 250ms;
  }

  a:hover {
    font-size: 1.05em;
  }

  @media screen and (max-width: 480px) {

    overflow-x: hidden;

    .navegacao {
      gap: 5vw;
    }

    a {
      font-size: .9rem;
      :hover {
        font-size: .9rem;
      }
    }

    ul {
      padding: 0 20px;
    }


    .usuario {
      display: none;
    }
  }
`;
