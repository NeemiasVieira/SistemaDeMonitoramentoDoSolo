import React, { useState } from "react";
import { ModalIndexStyle } from "./IndexModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faXmark } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface ModalIndexProps {
  botaoOpenModal: React.FC<{ onClick: () => void }>;
  children: React.JSX.Element;
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  maxWidth?: string;
  maxHeight?: string;
  title?: string;
  icon?: IconDefinition;
  paddingContent?: string;
}

export const IndexModal: React.FC<ModalIndexProps> = ({
  botaoOpenModal: OpenButton,
  width,
  height,
  children,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  title,
  icon,
  paddingContent,
}) => {
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
      border: "none",
      width: width ?? "70vw",
      height: height ?? "70vh",
      maxHeight: maxHeight ?? "3000px",
      maxWidth: maxWidth ?? "3000px",
      minHeight: minHeight ?? "0",
      minWidth: minWidth ?? "0",
      backgroundColor: "var(--contrast)",
      opacity: "1",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      padding: 0,
    },
    overlay: {
      backgroundColor: "var(--bg-modal)",
    },
  };

  return (
    <>
      <OpenButton onClick={openModal} />

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <ModalIndexStyle>
          <div className="header">
            <h3>
              <FontAwesomeIcon icon={icon} />
              {title}
            </h3>
            <button onClick={closeModal} className="closeButton">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div style={{ padding: paddingContent ?? 0 }}>{children}</div>
        </ModalIndexStyle>
      </Modal>
    </>
  );
};
