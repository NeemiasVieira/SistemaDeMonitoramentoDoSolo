import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
Modal.setAppElement('#root');

interface UpdateButtonProps {
  onCLick?: () => void;
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
    background-color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-bg)' : '#ffa520')};
    cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
    padding: 20px;
    transition: all 300ms;
    color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-color)' : 'var(--white)')};
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

export const UpdateButton: React.FC<UpdateButtonProps> = ({ onCLick, disabled }) => {
  const onClickButton = () => {
    if (!disabled) {
      window.scrollTo(0, 0);
      onCLick();
    }
  };

  return (
    <ButtonStyle $disabled={disabled}>
      <button onClick={onClickButton}>
        <FontAwesomeIcon icon={faPencil} />
      </button>
    </ButtonStyle>
  );
};
