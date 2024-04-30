import styled from "styled-components";

export const ModalNavigationStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 70px;
  color: #000;

  h2 {
    margin: 40px 0;
    text-align: center;
  }

  .logo {
    display: none;
  }

  .navegacao {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
  }

  ul li a {
    display: flex;
    justify-content: center;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
  }

  .switchTheme {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    text-decoration: none;
    background-color: #fff;
    padding: 12px 20px;
    border-radius: 8px;
    gap: 10px;

    svg {
      color: #000;
    }
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
`;
