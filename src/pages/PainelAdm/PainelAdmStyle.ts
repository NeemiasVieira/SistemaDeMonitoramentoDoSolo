import styled from "styled-components";

export const PainelAdmStyle = styled.main`

  min-height: 551px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--bg-primary);

  h2{
    margin: 120px 0 80px 0;
    text-align: center;
  }

  .menu{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: auto;
    height: auto;
    gap: 40px;
    margin-bottom: 50px;
    border-radius: 20px;
  }

  .botaoMenu{
    width: 500px;
    height: 150px;
    border: none;
    border-radius: 10px;
    background-color: var(--bg-primary);
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.75);

    svg{
      font-size: 2.5rem;
    }
  }

  .botaoMenu:hover{
    border: solid #222 1px;
  }

  .especies{
    svg{
      color: var(--dark-green);
    }
  }

`