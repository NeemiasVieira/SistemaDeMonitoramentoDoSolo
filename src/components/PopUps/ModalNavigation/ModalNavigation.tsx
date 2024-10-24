import { useEffect, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalNavigationStyle } from './ModalNavigationStyle';
import { ListaNavegacao } from '../../Navigation/ListaNavegacao';
import { useIsMobile } from '@services/hooks/useIsMobile';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const customStyles: Modal.Styles = {
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    display: 'flex',
    alignItems: 'center',
    flexFlow: 'column wrap',
    border: 'solid #000 1px',
    width: '100vw',
    height: '100%',
    backgroundColor: 'var(--contrast)',
    opacity: '1',
    zIndex: 3,
  },
  overlay: {
    backgroundColor: 'var(--bg-modal)',
    zIndex: 2,
  },
};

export const ModalNavigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) closeModal();
  }, [isMobile]);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="botaoToggleDropDown" onClick={openModal}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <ModalNavigationStyle>
          <h2>Menu</h2>
          <ListaNavegacao closeModal={closeModal} />
        </ModalNavigationStyle>
      </Modal>
    </>
  );
};
