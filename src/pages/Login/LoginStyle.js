import styled from "styled-components";

export const LoginMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-height: 93vh;

  h1 {
    margin-bottom: 50px;
  }

  form {
    background: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 50vw;
    max-width: 500px;
    height: 35vh;
    max-height: 400px;
    border: solid #ccc 3px;
    border-radius: 10px;
    padding: 20px;
  }

  label {
    text-align: center;
    color: whitesmoke;
    font-weight: 600;
  }

  input {
    margin: 10px 0;
    text-align: center;
    width: 30vw;
    height: 25px;
    max-width: 460px;
    border-radius: 5px;
    border: none;
    background: #000;
    color: whitesmoke;
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms;
    background: #000;
    color: whitesmoke;

    :hover {
      transform: scale(1.1);
    }
  }

  a {
    text-decoration: none;
    color: whitesmoke;
    font-size: 1rem;
  }

  .sugestaoCadastro {
    margin-top: 20px;
    color: whitesmoke;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    p {
      font-size: 0.9em;
      font-weight: 300;
    }
  }

  .crieSuaConta{
    font-weight: 600;
  }

  @media screen and (max-width: 480px) {
    h1 {
      font-size: 1.3em;
    }

    h2{
      margin-top: 5px;
      font-size: 1rem;
    }
    form {
      width: 70vw;
      max-width: 450px;
      height: 30vh;
    }

    input {
      width: 60vw;
      max-width: 400px;
      font-size: 17px;
    }
    button {
      width: 150px;
      height: 34px;
      font-size: 1.1em;

      :hover {
        transform: scale(1);
      }
    }

    .sugestaoCadastro {
      overflow-x: hidden;
      margin-top: 5px;
      max-width: 55vw;
    }
  }
`;
