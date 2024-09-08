import styled from "styled-components";

export const ModalNavigationStyle = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-top: 70px;
  color: #000;

  h2 {
    margin: 40px 0;
    text-align: center;
    color: var(--text-primary);
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
    color: var(--text-primary);
    text-decoration: none;
    background-color: var(--bg-primary);
    padding: 12px 20px;
    border-radius: 8px;
  }

  .switchTheme {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-primary);
    text-decoration: none;
    background-color: var(--bg-primary);
    padding: 12px 20px;
    border-radius: 8px;
    gap: 10px;

    svg {
      color: var(--text-secondary);
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
    content: "";
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
