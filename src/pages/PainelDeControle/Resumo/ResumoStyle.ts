import styled from "styled-components";

export const ResumoStyle = styled.main`
  margin: 50px 0 0 0;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 20px;
  background-color: var(--bg-primary);

  .identificacaoDaPlanta {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  .nomeDaPlanta {
    font-size: 40px;
    font-weight: 700;
    margin: 0;
  }

  .especieDaPlanta {
    font-size: 25px;
    font-weight: 600;
    color: var(--text-secondary);
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
    background-color: var(--white);
    color: #333;
    margin: 0 0 20px 0;
    height: 40px;
    margin-top: 4%;
  }

  @media screen and (max-width: 480px) {
    padding-top: 30px;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;
