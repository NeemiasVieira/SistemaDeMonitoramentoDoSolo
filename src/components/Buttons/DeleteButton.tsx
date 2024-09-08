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
    background-color: var(--red);
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

  @media screen and (max-width: 480px) {
    button {
      width: 28px;
      height: 28px;
      padding: 18px;
    }

    svg {
      font-size: 1rem;
    }
  }
`;

const ModalStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  height: 100%;

  .titleAndCloseButton {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
  }

  h2 {
    font-size: 1.1rem;
    margin-top: 5px;
    margin-bottom: 30px;
    font-weight: 600;
    color: var(--text-secondary);
    font-size: 1rem;
  }

  .closeButton {
    font-size: 1rem;
    background-color: var(--red);
    border-radius: 7px;
    border: none;
    color: #fff;
    font-weight: 900;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .DivYesOrNo {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .no:hover {
    border: solid var(--border-hover) 1px;
  }

  .yes:hover {
    background-color: var(--red);
    color: var(--white);
  }

  .YesOrNo {
    width: 100px;
    height: 25px;
    border-radius: 5px;
    border: solid var(--border-primary) 1px;
    background-color: var(--white);
    color: var(--text-primary);
    transition: all 200ms;
    cursor: pointer;
  }

  .YesOrNo:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 480px) {
    h2 {
      font-size: 0.9rem;
    }

    .closeButton {
      font-size: 0.7rem;
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
      maxWidth: "350px",
      width: "70vw",
      height: "100px",
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
          <div className="titleAndCloseButton">
            <span></span>
            <h2>Tem certeza que deseja excluir?</h2>
            <button onClick={closeModal} className="closeButton">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="DivYesOrNo">
            <button className="YesOrNo no" onClick={closeModal}>
              Nao
            </button>
            <button
              className="YesOrNo yes"
              onClick={() => {
                onDelete();
                closeModal();
              }}
            >
              Sim
            </button>
          </div>
        </ModalStyle>
      </Modal>
    </ButtonStyle>
  );
};
