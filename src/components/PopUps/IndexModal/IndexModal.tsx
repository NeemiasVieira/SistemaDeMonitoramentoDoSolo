import React, { useState } from "react";
import { ModalIndexStyle } from "./IndexModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface ModalIndexProps{
  botaoOpenModal: React.FC<{ onClick: () => void }>;
  children: any;
  width?: string;
  height?: string;
  minHeight?: string,
  minWidth?: string
  maxWidth?: string;
  maxHeight?: string;
}

export const IndexModal: React.FC<ModalIndexProps> = ({botaoOpenModal: OpenButton, width, height, children, minHeight, minWidth, maxHeight, maxWidth}) => {
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
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      flexFlow: "column wrap",
      border: "solid #ccc 1px",
      width: width ?? "70vw",
      height: height ?? "70vh",
      maxHeight: maxHeight ?? "400px",
      maxWidth: maxWidth ?? "400px",
      minHeight: minHeight ?? "300px",
      minWidth: minWidth ?? "300px",
      backgroundColor: "#fff",
      opacity: ".9",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <>
      
      <OpenButton onClick={openModal}/>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <ModalIndexStyle>
        <button onClick={closeModal} className="closeButton">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {children}
        </ModalIndexStyle>
      </Modal>  
    </>
  );
};
