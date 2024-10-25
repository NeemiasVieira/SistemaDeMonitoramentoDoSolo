import styled from 'styled-components';

export const NavStyleMobile = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: var(--contrast);
  border-bottom: solid var(--border-primary) 2px;
  z-index: 3;

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
`;

export const ListaNavegacaoStyle = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row nowrap;
  width: 100%;
  background-color: var(--contrast);
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  border-bottom: solid var(--border-primary) 2px;

  * {
    font-family: 'Montserrat', sans-serif;
  }

  .logoutMobileButton,
  .mobileOnly {
    display: none;
  }

  .navegacao .selecionado {
    border-bottom: solid var(--light-green) 4px;
    border-top: solid transparent 4px;
  }

  .navegacao {
    width: 95%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 25px;
    flex-flow: row;
    margin: 0;
    height: 70px;
  }

  .navegacao li {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 66px;
    padding: 0 10px;
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

  .switchTheme {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    padding: 8px 0;
    position: absolute;
    right: 115px;

    .texto {
      width: 47%;
      margin-left: 23px;
      text-align: initial;
    }

    svg {
      color: var(--text-secondary);
    }
  }

  .botaoLogin {
    position: absolute;
    right: 40px;
  }

  .switch {
    position: relative;
    display: inline-block;
    width: calc(60px * 0.75);
    height: calc(34px * 0.75);
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

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

  .slider:before {
    position: absolute;
    content: '';
    height: calc(26px * 0.75);
    width: calc(26px * 0.75);
    left: calc(4px * 0.75);
    bottom: calc(4px * 0.75);
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #555;
  }

  input:focus + .slider {
    box-shadow: 0 0 calc(1px * 0.75) #333;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(calc(26px * 0.75));
    -ms-transform: translateX(calc(26px * 0.75));
    transform: translateX(calc(26px * 0.75));
  }

  .slider.round {
    border-radius: calc(34px * 0.75);
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
