import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from '@services/hooks/useIsMobile';
import { useCallback } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
Modal.setAppElement('#root');

const ModalStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: column wrap;
  height: 100%;
  padding: 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
    width: 100%;
    background-color: var(--red);
  }

  .trashIcon {
    margin: 0 5px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white);
    font-size: 1rem;
    padding-left: 10px;
    text-align: center;
  }

  .closeButton {
    font-size: 1rem;
    background-color: transparent;
    border: none;
    color: var(--white);
    font-weight: 900;
    width: 35px;
    height: 35px;
    cursor: pointer;
  }

  .texts {
    display: flex;
    flex-flow: column wrap;
    gap: 15px;
    padding: 10px 20px;
    justify-content: space-between;
    margin: 15px 0;
  }

  .confirmText {
    color: var(--text-primary);
  }

  .warningText {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .actions {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    gap: 10px;
    width: calc(100% - 40px);
    padding: 0 20px;
  }

  .no:hover {
    border: solid var(--border-hover) 1px;
  }

  .yes:hover {
    background-color: var(--red);
    color: var(--white);
  }

  .action {
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border: solid var(--border-primary) 1px;
    background-color: var(--contrast);
    color: var(--text-primary);
    transition: all 200ms;
    cursor: pointer;
  }

  .action:hover {
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

interface DeleteButtonModalProps {
  onDelete: () => void;
  isModalOpen: boolean;
  closeModal: () => void;
}

export const DeleteButtonModal: React.FC<DeleteButtonModalProps> = ({ onDelete, isModalOpen, closeModal }) => {
  const isMobile = useIsMobile();

  const onClickDelete = useCallback(() => {
    onDelete();
    closeModal();
  }, [onDelete, closeModal]);

  const customStyles: Modal.Styles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      borderRadius: '8px',
      width: isMobile ? '250px' : '300px',
      height: isMobile ? '230px' : '240px',
      backgroundColor: 'var(--contrast)',
      opacity: '1',
      boxShadow: '0px 16px 16px 0px rgba(0, 0, 0, 0.2)',
      padding: 0,
      overflowX: 'hidden',
    },
    overlay: {
      backgroundColor: 'var(--bg-modal)',
    },
  };

  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
      <ModalStyle>
        <div className="header">
          <h2>
            <FontAwesomeIcon icon={faTrash} className="trashIcon" />
            Excluir item
          </h2>
          <button onClick={closeModal} className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="texts">
          <span className="confirmText">Tem certeza que deseja excluir o item selecionado?</span>
          <span className="warningText">Essa ação não poderá ser desfeita.</span>
        </div>

        <div className="actions">
          <button className="action no" onClick={closeModal}>
            Cancelar
          </button>
          <button className="action yes" onClick={onClickDelete}>
            Excluir
          </button>
        </div>
      </ModalStyle>
    </Modal>
  );
};
