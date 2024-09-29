import styled from "styled-components";

export const SquadStyle = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: auto;
  max-width: 1000px;
  padding: 40px;
  background-color: var(--white);
  border-radius: 25px;
  margin-bottom: 50px;
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 1.7rem;
    text-align: center;
    margin: 0 0 35px 0;
  }

  .pessoas {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .pessoa {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    width: 180px;
    background-color: var(--white);
    border-radius: 20px;
    padding: 15px;
    border: solid var(--border-primary);

    img {
      padding: 5px;
      border-radius: 100%;
      width: 150px;
      height: 150px;
      background-color: var(--border-secondary);
    }

    h3 {
      text-align: center;
      width: 100%;
    }

    h4 {
      text-align: center;
    }
  }

  @media screen and (max-width: 480px) {
    .pessoas {
      grid-template-columns: repeat(1fr, 1);
    }
  }
  @media screen and (min-width: 651px) and (max-width: 1370px) {
    .pessoas {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 650px) {
    .pessoas {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
