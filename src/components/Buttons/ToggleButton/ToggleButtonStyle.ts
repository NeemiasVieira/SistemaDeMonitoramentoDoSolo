import styled from 'styled-components';

export const ToggleButtonStyle = styled.label`
  position: relative;
  display: inline-block;
  width: calc(60px * 0.75);
  height: calc(34px * 0.75);

  input {
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
    z-index: 0;
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
