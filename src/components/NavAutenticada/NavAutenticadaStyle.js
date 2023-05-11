import styled from "styled-components";

export const NavAutenticadaStyle = styled.nav`
  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao {
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 4vw;
    flex-flow: row;
    background-color: #10bb70;
    margin: 0;
    height: 9vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: solid black 1px;
    z-index: 1;
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

  .logout {
    position: absolute;
    right: 8%;
    top: 25%;
    margin: 0;

    button {
      width: 50px;
      border-radius: 5px;
      font-size: 1em;
      font-weight: 700;
      height: 30px;
      cursor: pointer;
      border: solid rgb(16, 119, 64) 1px;
      transition: transform 300ms;

      :hover {
        transform: scale(1.1);
      }
    }
  }

  .usuario {
    position: absolute;
    right: 17.5%;
    color: whitesmoke;
    font-weight: 500;
  }

  @media screen and (max-width: 480px) {
    .navegacao {
      gap: 5vw;
    }

    a {
      font-size: 0.8em;
      :hover {
        font-size: 0.8em;
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
      width: 90vw;
      padding: 0 3px;
      display: flex;
      justify-content: flex-end;
      position: absolute;
      right: 10%;
      top: 10%;
      font-size: 0.7em;
      color: whitesmoke;
      font-weight: 500;
    }
  }
`;
