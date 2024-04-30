import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface DeleteButtonProps {
  onDelete: () => void;
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
    background-color: #f44;
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

const ModalStyle = styled.div`
  .closeButton {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 1rem;
    background-color: #f44;
    border-radius: 10px;
    border: none;
    color: #fff;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  h2{
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: var(--text-secondary);
    font-size: 1rem;
  }

  .DivYesOrNo{
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .YesOrNo{
    width: 100px;
    height: 25px;
    border-radius: 5px;
    border: solid var(--border-primary) 1px;
    background-color: var(--white);
    color: var(--text-primary);
    transition: all 200ms;
    cursor: pointer;
  }

  .YesOrNo:hover{
    border: solid var(--border-hover) 1px;
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px){
    .closeButton{
      font-size: .7rem;;
      top: 7%;
    }
  }
`;

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "solid var(--border-primary) 1px",
      borderRadius: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexFlow: "column wrap",
      maxWidth: "350px",
      width: "70vw",
      height: "140px",
      backgroundColor: "var(--white)",
      opacity: "1",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "var(--bg-modal)", 
    },
  };

  return (
    <ButtonStyle>
      <button onClick={() => openModal()}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <ModalStyle>
          <h2>Tem certeza que deseja excluir?</h2>
          <button onClick={closeModal} className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="DivYesOrNo">
            <button className="YesOrNo" onClick={closeModal}>Nao</button>
            <button className="YesOrNo" onClick={() => {
              onDelete();
              closeModal();
            }}>Sim</button>
          </div>
        
        </ModalStyle>
      </Modal>
    </ButtonStyle>
  );
};
