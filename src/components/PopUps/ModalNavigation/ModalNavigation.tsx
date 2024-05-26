import React, { useEffect, useMemo, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalNavigationStyle } from "./ModalNavigationStyle";
import { ListaNavegacao } from "../../Navigation/ListaNavegacao";
import { useIsMobile } from "../../../services/hooks/useIsMobile";
import Modal from "react-modal";
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
    zIndex: "1000",
  },
  overlay: {
    backgroundColor: "var(--bg-modal)", 
  },
};

interface ModalNavigationProps {
  auth: boolean;
}

export const ModalNavigation: React.FC<ModalNavigationProps> = ({ auth }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if(!isMobile) closeModal();
  }, [isMobile])

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
          <ListaNavegacao closeModal={closeModal}/>
        </ModalNavigationStyle>
      </Modal>
    </>
  );
};
