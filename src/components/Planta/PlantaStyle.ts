import styled from "styled-components";

export const PlantaStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 20px;
  border-radius: 5px;
  border: solid var(--border-primary) 1px;
  gap: 15px;
  background-color: var(--contrast);
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);

  .Planta {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 25px;
  }

  .nomeDaPlanta {
    font-size: 1.4rem;
    margin: 0;
  }

  h3 {
    margin: 5px 0;
  }

  p {
    margin: 0;
  }

  .imagemPlanta {
    width: 150px;
    height: 150px;
  }

  .infoPlanta {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column wrap;
    gap: 5px;
  }

  .buttonDetalhes {
    margin-top: 20px;
    cursor: pointer;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-size: 1.2em;
    transition: all 300ms ease 0s;
    border: solid var(--border-primary) 1px;
    color: var(--text-primary);
    background-color: var(--button-primary);
  }

  .buttonDetalhes:hover {
    transform: scale(1.1);
  }

  .copyId {
    color: var(--text-secondary);
    border: none;
    margin-left: 5px;
    background-color: transparent;
    font-style: italic;
    font-size: 1rem;
    cursor: pointer;
    transition: all 300ms ease 0s;
    svg {
      font-size: 1rem;
      margin-left: 5px;
    }
  }
  .copyId:hover {
    color: var(--dark-green);
    font-weight: 800;
  }

  @media screen and (max-width: 480px) {
    width: 80vw;
    padding: 15px 0;
    border-radius: 10px;

    h2 {
      padding-bottom: 10px;
      border-bottom: solid #ccc 1px;
      width: 100%;
    }

    .Planta {
      padding: 10px;
      max-width: 95%;
      gap: 5px;
    }

    .infoPlanta {
      h3 {
        display: none;
      }
    }

    .buttonDetalhes {
      margin-top: 5px;
      width: 150px;
      font-size: 1rem;
      height: 35px;
    }

    .imagemPlanta {
      width: 90px;
      height: 90px;
    }
  }
`;
