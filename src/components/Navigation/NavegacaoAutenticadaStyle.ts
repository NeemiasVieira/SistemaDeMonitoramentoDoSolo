import styled from "styled-components";

export const NavAutenticadaStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  width: 100%;
  background-color: #fff;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: solid #ccc 2px;

  * {
    font-family: "Montserrat", sans-serif;
  }

  .logoutMobileButton, .mobileOnly{
    display: none;
  }

  .navegacao .selecionado{
    padding: 4px 10px -1px 10px;
    border-bottom: solid var(--light-green) 4px;
  }

  .navegacao {
    width: 90%;
    display: flex;
    justify-content: initial;
    align-items: center;
    gap: 25px;
    flex-flow: row;
    margin: 0;
    height: 70px;
  }

  .navegacao li{
    display: flex;
  justify-content: center;
  align-items: center;
    height: 100%;  
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


  .botaoPerfil .dropdown {
    font-size: 17px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
    cursor: pointer;
  }

  .botaoPerfil {
    margin-right: 40px;
    display: flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    color: var(--white);
    font-weight: 700;
    cursor: pointer;
    background-color: var(--bg-dark-blue);
  }

  .dropdown-content {
    top: 63px;
    right: 5%;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    z-index: 1;
    box-shadow: 0px 16px 16px 0px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 15px 0 15px 15px;
    border: solid #ccc 1px;
  ul {
      padding: 10px;
      margin: 0px;
    }

  li{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg{
    margin-right  : 5px;
  }

  }
  .dropdown-content a {
    display: flex;
    justify-content: center;
    align-items: center;
    float: none;
    color: black;
    width: 100%;
    padding: 12px 16px;
    display: block;
    text-align: initial;
    border-radius: 5px;
  }
  .dropdown-content a:hover {
    background-color: #ccc;
    color: black;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .switchTheme{
    display: flex;
    flex-flow: row nowrap;
    gap: 25px;

    .texto{
      max-width: 47%;
      margin-left: 25px;
      text-align: initial;
    }

    svg{
      position: absolute;
      left: 25px;
    }
  }

  .switch {
  position: relative;
  display: inline-block;
  width: calc(60px * 0.75);  /* Escala a largura para 85% do tamanho original */
  height: calc(34px * 0.75);  /* Escala a altura para 85% do tamanho original */
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
  -webkit-transition: .4s;
  transition: .4s;
}

/* Reduz as dimensões do slider */
.slider:before {
  position: absolute;
  content: "";
  height: calc(26px * 0.75);  /* Escala a altura para 85% */
  width: calc(26px * 0.75);   /* Escala a largura para 85% */
  left: calc(4px * 0.75);    /* Escala a posição left para 85% */
  bottom: calc(4px * 0.75);  /* Escala a posição bottom para 85% */
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #333;
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


  @media screen and (min-width: 482px) and (max-width: 850px){
    .dropdown-content{
      right: 9%;
    }
  }

  @media screen and (min-width: 851px) and (max-width: 1100px){
    .dropdown-content{
      right: 7%;
    }
  }

  @media screen and (max-width: 480px) {

    display: none;

  }
`;