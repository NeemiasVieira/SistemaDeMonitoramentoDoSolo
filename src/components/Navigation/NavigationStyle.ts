import styled from "styled-components";

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  background-color: var(--white);
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: solid var(--border-primary) 2px;
  z-index: 1;

  * {
    font-family: "Montserrat", sans-serif;
  }

  .navegacao .selecionado {
    padding: 4px 10px -1px 10px;
    border-bottom: solid var(--light-green) 4px;
  }

  .navegacao {
    width: 95%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 35px;
    flex-flow: row;
    margin: 0;
    height: 70px;
  }

  .navegacao li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 0px;
  }

  li {
    list-style: none;
  }

  a {
    color: var(--gray-primary);
    text-decoration: none;
    font-weight: 700;
    transition: all 100ms;
  }

  .navegacao .botaoLogin {
    position: fixed;
    right: 50px;
  }

  .switchTheme {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    position: absolute;
    right: 125px;

    svg {
      color: var(--text-secondary);
    }
  }

  .switch {
    position: relative;
    display: inline-block;
    width: calc(60px * 0.75); /* Escala a largura para 85% do tamanho original */
    height: calc(34px * 0.75); /* Escala a altura para 85% do tamanho original */
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  /* Reduz as dimensões do slider */
  .slider:before {
    position: absolute;
    content: "";
    height: calc(26px * 0.75); /* Escala a altura para 85% */
    width: calc(26px * 0.75); /* Escala a largura para 85% */
    left: calc(4px * 0.75); /* Escala a posição left para 85% */
    bottom: calc(4px * 0.75); /* Escala a posição bottom para 85% */
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #555;
  }

  input:focus + .slider {
    box-shadow: 0 0 calc(1px * 0.75) #333; /* Escala o tamanho da sombra para 85% */
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(calc(26px * 0.75));
    -ms-transform: translateX(calc(26px * 0.75));
    transform: translateX(calc(26px * 0.75));
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: calc(34px * 0.75); /* Escala o border-radius para 85% */
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavStyleMobile = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: var(--white);
  border-bottom: solid #ccc 2px;
  z-index: 1;

  img {
    margin-left: 20px;
  }

  .botaoToggleDropDown {
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 25px 0 0;

    svg {
      font-size: 1.8rem;
      padding: 0;
      color: var(--text-primary);
    }
  }


  @media screen and (min-width: 481px) {
    display: none;
  }
`;
