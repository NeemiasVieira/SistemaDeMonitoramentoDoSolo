import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { useCallback, useMemo, useState } from 'react';
import { DeleteButtonModal } from './DeleteButtonModal';

interface DeleteButtonProps {
  onDelete: () => void;
  disabled?: boolean;
}

const ButtonStyle = styled.div<{ $disabled: boolean }>`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: none;
    width: 35px;
    height: 35px;
    background-color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-bg)' : 'var(--red)')};
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
    padding: 20px;
    transition: all 300ms;
    &:hover {
      ${({ $disabled }) => ($disabled ? '' : 'transform: scale(1.1);')}
    }
  }

  svg {
    font-size: 1.2rem;
    color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-color)' : 'var(--white)')};
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

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, disabled }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleModal = useMemo(() => {
    return disabled ? () => {} : openModal;
  }, [disabled, onDelete]);

  return (
    <ButtonStyle $disabled={disabled}>
      <button onClick={handleModal}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <DeleteButtonModal onDelete={onDelete} isModalOpen={isModalOpen} closeModal={closeModal} />
    </ButtonStyle>
  );
};
