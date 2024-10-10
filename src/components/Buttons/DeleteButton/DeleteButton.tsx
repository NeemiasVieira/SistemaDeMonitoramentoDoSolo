import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { DeleteButtonModal } from "./DeleteButtonModal";

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
    color: var(--white);
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

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  return (
    <ButtonStyle>
      <button onClick={() => openModal()}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <DeleteButtonModal onDelete={onDelete} isModalOpen={isModalOpen} closeModal={closeModal} />
    </ButtonStyle>
  );
};
