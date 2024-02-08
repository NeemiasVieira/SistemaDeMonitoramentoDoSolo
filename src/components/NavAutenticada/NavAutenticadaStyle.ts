import styled from "styled-components";

export const NavAutenticadaStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  background-color: #10bb70;
  height: 9vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: solid #ccc 2px;

  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao {
    width: 60%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 4vw;
    flex-flow: row;
    margin: 0;
    height: 9vh;
  }

  .logoutDiv {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 125px;
    color: #fff;
  }

  .logoutButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #10bb70;
    color: #fff;
    width: 70px;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: 700;
    height: 35px;
    cursor: pointer;
    border: solid #fff 2px;
    transition: transform 300ms;
    :hover {
      transform: scale(1.1);
    }
  }

  li {
    list-style: none;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
    font-weight: 500;
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

    .logout {
      right: 12%;
      top: 35%;

      button {
        font-size: 0.9em;
        font-weight: 900;
        :hover {
          transform: scale(1);
        }
      }
    }

    .usuario {
      display: none;
    }
  }
`;
