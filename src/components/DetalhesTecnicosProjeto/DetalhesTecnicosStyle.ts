import styled from "styled-components";

export const DetalhesTecnicosStyle = styled.section`
  display: flex;
  flex-flow: column wrap;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;

  .diagramaARQ {
    margin: 70px 0;
    height: auto;
    width: 1000px;
    max-width: 70vw;
    -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
    border-radius: 20px;
  }

  h2 {
    width: 100%;
    text-align: center;
    margin: 30px 0;
  }
  svg {
    font-size: 3.7rem;
  }
  img {
    max-width: 120px;
    height: 50px;
  }

  .azureLogo {
    height: 30px;
    max-width: 150px;
    margin-right: 5px;
  }

  .nodeLogo {
    height: 35px;
    margin-bottom: 12px;
  }

  .link {
    font-size: 1rem;
    margin-right: 5px;
  }

  span {
    font-weight: 300;
    color: var(--text-secondary);
    margin-top: 10px;
  }

  .divtecnologias {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-template-rows: repeat(auto-fill, 360px);
    justify-items: center;
    justify-content: center;
    align-items: center;
    width: 90vw;
    max-width: 860px;
    padding: 0 30px;
    gap: 20px;
  }

  .reactlogo {
    color: #57c4dc;
  }

  .tecnologia {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    height: 360px;
    background-color: var(--contrast);
    border-radius: 10px;
    width: 200px;
    max-width: 200px;

    h3 {
      text-align: center;
      width: 100%;
      margin: 20px 0;
      font-size: 1.2rem;
      font-weight: 600;
    }

    ul {
      width: 90%;
      line-height: 20px;
      list-style: none;
      font-style: italic;
      height: 50%;
      margin: 10px 0;
      padding: 0 10px;
    }

    li {
      margin-left: 5px;
    }

    a {
      text-decoration: none;
      text-decoration: underline;
      color: var(--text-primary);
      font-weight: 500;
      transition: all 100ms;
      line-height: 30px;
    }

    a:hover {
      color: var(--dark-green);
      font-weight: 700;
    }
  }

  @media screen and (max-width: 480px) {
    .diagramaARQ {
      margin: 30px 0;
      max-width: 80vw;
    }

    svg {
      font-size: 3rem;
    }
    img {
      max-width: 100px;
      height: 30px;
      margin-bottom: 12px;
    }

    .azureLogo {
      height: 30px;
      max-width: 100px;
      margin-right: 5px;
    }

    .nodeLogo {
      height: 30px;
    }

    .link {
      font-size: 0.8rem;
    }

    .divtecnologias {
      padding: 0;
      gap: 15px;
    }

    .reactlogo {
      color: #57c4dc;
    }

    .tecnologia {
      height: 335px;
      background-color: var(--contrast);
      border-radius: 10px;
      width: 200px;
      max-width: 100vw;
      h3 {
        text-align: center;
        width: 100%;
        margin: 20px 5px;
        font-size: 1.2rem;
        font-weight: 600;
      }

      ul {
        width: 90%;
        line-height: 20px;
        list-style: none;
        font-style: italic;
        height: 50%;
        margin: 10px 0;
        padding: 0;
      }

      a {
        text-decoration: none;
        text-decoration: underline;
        color: var(--text-primary);
        font-weight: 500;
        transition: all 100ms;
      }

      a:hover {
        color: var(--dark-green);
        font-weight: 700;
      }
    }
  }
`;
