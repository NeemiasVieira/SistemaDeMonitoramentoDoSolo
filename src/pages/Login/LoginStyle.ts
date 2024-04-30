import styled from "styled-components";

export const LoginMain = styled.main`
  display: flex;
  flex-flow: column wrap;
  margin-top: 70px;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  background-color: var(--bg-primary);

  h1 {
    margin: 0;
  }

  h2 {
    margin: 25px 0;
    font-size: 1.6rem;
  }

  form {
    background: #111;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 50vw;
    max-width: 450px;
    height: 20vh;
    min-height: 360px;
    border: solid var(--border-primary) 1px;
    border-radius: 10px;
    padding: 20px;
    overflow-x: hidden;
    margin-bottom: 20px;
  }

  label {
    text-align: center;
    color: #fff;
    font-weight: 600;
    margin: 10px 0;
    font-size: 1.2rem;
  }

  .divIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-right: solid var(--border-primary) 2px;

    svg {
      font-size: 1.8rem;
      height: 45px;
      color: var(--text-primary);
      padding-right: 15px;
    }
  }

  .divInput {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: var(--button-primary);
    padding: 0 10px;
    border-radius: 5px;
    border: solid var(--border-primary) 1px;
  }

  input {
    margin: 10px 0;
    font-size: 1rem;
    width: 30vw;
    height: 25px;
    padding: 10px;
    max-width: 300px;
    border: none;
    background: var(--button-primary);
    color: var(--text-primary)
  }

  input:focus {
    outline: none;
  }

  .botaofazerLogin {
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms;
    background: var(--button-primary);
    color: var(--text-primary);
    border: solid var(--border-primary) 1px;

    :hover {
      transform: scale(1.1);
    }
  }

  .crieSuaConta {
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
  }

  .sugestaoCadastro {
    margin-top: 20px;
    color: #000;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 1rem;

    p {
      font-size: 0.9rem;
      font-weight: 300;
      color: #fff;
    }
  }

  @media screen and (max-width: 480px) {

    h2 {
      margin-top: 5px;
      font-size: 1.4rem;
    }
    form {
      width: 80vw;
      max-width: 450px;
      height: 45vh;
    }

    .divIcon {
      height: 45px;

      svg {
        height: 30px;
      }
    }

    input {
      width: 50vw;
      max-width: 400px;
      font-size: 1rem;
      height: 5px;
    }
    .botaofazerLogin {
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
      max-width: 250px;
      font-size: 0.9rem;
    }
  }
`;
