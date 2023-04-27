import styled from "styled-components";

export const CadastroConcluidoMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section {
    background: #222;
    width: 500px;
    height: 200px;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: solid black 1px;
    gap: 20px;
  }

  h2 {
    color: whitesmoke;
    margin: 0;
    font-weight: 500;
  }

  .icone {
    font-size: 4em;
    color: rgb(16, 189, 64);
  }

  .link {
    color: #000;
    width: 150px;
    font-size: 1.2em;
    font-weight: 600;
    text-decoration: none;
    background: #ccc;
    border-radius: 3px;
    text-align: center;
    padding: 5px 0;
    transition: transform 300ms;
  }

  .link:hover {
    transform: scale(1.1);
  }
`;
