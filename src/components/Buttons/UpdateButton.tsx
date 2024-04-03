import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch } from "react";
import styled from "styled-components";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface UpdateButtonProps {
  openModal?: any
}

const ButtonStyle = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 35px;
    height: 35px;
    background-color: #ffa520;
    cursor: pointer;
    padding: 20px;
    transition: all 300ms;
  }

  button:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 1.2rem;
    color: #fff;
  }

@media screen and (max-width: 480px){
    button{
      width: 28px;  
      height: 28px;
      padding: 18px;
    }

    svg{
      font-size: 1rem;
    }
  }

`;

export const UpdateButton: React.FC<UpdateButtonProps> = ({ openModal }) => {


  return (
    <ButtonStyle>
      <button onClick={() => openModal()}>
        <FontAwesomeIcon icon={faPencil} />
      </button>
    </ButtonStyle>
  );
};
