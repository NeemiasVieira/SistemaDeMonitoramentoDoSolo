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
    color: #111;
    margin-bottom: 40px;
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
    border: solid #aaa 1px;
    transition: all 200ms;
    cursor: pointer;
  }

  .YesOrNo:hover{
    border: solid #222 1px;
    transform: scale(1.1);
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
      border: "solid #aaa 1px",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      flexFlow: "column wrap",
      width: "350px",
      height: "130px",
      backgroundColor: "#fff",
      opacity: "1",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
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
