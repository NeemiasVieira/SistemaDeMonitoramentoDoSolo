import styled from "styled-components";

export const MinhaPlantaMain = styled.main`
  min-height: 80vh;
  margin: 70px 0 0 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 20px;
  background-color: var(--bg-primary);

  .nomeDaPlanta{
    font-size: 40px;
    letter-spacing: 1.5px;
    font-weight: 700;
    margin: 0;
  }

  h1 {
    font-size: 20px;
    margin: 60px 0 15px 0;
  }
  select {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    padding: 10px 10px;
    font-size: 16px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    margin: 0 0 20px 0;
    height: 40px;
    margin-top: 4%;
  }

  @media screen and (max-width: 480px) {
    padding-top: 50px;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
