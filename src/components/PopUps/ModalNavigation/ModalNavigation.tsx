import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Modal from "react-modal";
import { ModalNavigationStyle } from "./ModalNavigationStyle";
import { ListaNavegacaoAutenticada, ListaNavegacaoNaoAutenticada } from "../../Navigation/Navigation";
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    flexFlow: "column wrap",
    border: "solid #000 1px",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#aaa",
    opacity: ".9",
    paddingTop: "90px",
    zIndex: '1000'
  },
};

interface ModalNavigationProps{
    auth: boolean;
}

export const ModalNavigation: React.FC<ModalNavigationProps> = ({auth}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          {auth && <ListaNavegacaoAutenticada closeModal={closeModal}/>}
          {!auth && <ListaNavegacaoNaoAutenticada closeModal={closeModal}/>}

        </ModalNavigationStyle>
      </Modal>
    </>
  );
};

