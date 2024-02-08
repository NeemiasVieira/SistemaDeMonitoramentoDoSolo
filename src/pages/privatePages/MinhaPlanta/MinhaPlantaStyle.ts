import styled from "styled-components";

export const MinhaPlantaMain = styled.main`
  min-height: 91vh;
  margin: 10vh 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 20px;

  h1 {
    font-size: 20px;
    margin: 60px 0 15px 0;
  }
  select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 15px;
    font-size: 16px;
    border: 1px solid #bbb;
    border-radius: 5px;
    background-color: #fff;
    color: #333;
    margin: 0 0 20px 0;
  }

  @media screen and (max-width: 480px) {
    overflow-x: hidden;
  }
`;
