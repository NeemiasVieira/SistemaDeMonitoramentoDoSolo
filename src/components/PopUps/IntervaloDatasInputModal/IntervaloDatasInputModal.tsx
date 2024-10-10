import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faFloppyDisk, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { IntervaloDataInputModalStyle, IntervaloDataInputStyle } from "./IntervaloDatasInputModalStyle";
import { FormatarDatas } from "@assets/utils/FormatDate";
import Modal from "react-modal";
import { useIsMobile } from "@services/hooks/useIsMobile";
Modal.setAppElement("#root");

interface IntervaloDatasInputProps {
  params: {
    dataDeInicioBusca: string;
    dataDeFimBusca: string;
    setDataDeInicioBusca: React.Dispatch<React.SetStateAction<string>>;
    setDataDeFimBusca: React.Dispatch<React.SetStateAction<string>>;
  };
}

export const IntervaloDatasInput: React.FC<IntervaloDatasInputProps> = ({ params }) => {
  const [d1, setD1] = useState<string>(FormatarDatas.isoToInputDate(params.dataDeInicioBusca ?? String(new Date())));
  const [d2, setD2] = useState<string>(FormatarDatas.isoToInputDate(params.dataDeFimBusca ?? String(new Date())));
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const saveFilters = () => {
    closeModal();
    params.setDataDeInicioBusca(d1);
    params.setDataDeFimBusca(d2);
  };

  const cleanFilters = () => {
    closeModal();
    params.setDataDeInicioBusca(null);
    params.setDataDeFimBusca(null);
  };

  const customStyles = {
    content: {
      minHeight: "180px",
      height: "340px",
      width: isMobile ? "250px" : "350px",
      maxWidth: "400px",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      flexFlow: "column wrap",
      border: "none",
      backgroundColor: "var(--contrast)",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      padding: 0,
    },
    overlay: {
      backgroundColor: "var(--bg-modal)",
    },
  };

  return (
    <IntervaloDataInputStyle>
      <button onClick={openModal} className="openButton">
        <FontAwesomeIcon icon={faCalendarDays} />
        <span>Filtrar por datas</span>
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <IntervaloDataInputModalStyle>
          <div className="header">
            <h3>
              <FontAwesomeIcon icon={faCalendarDays} />
              Filtrar por datas
            </h3>
            <button onClick={closeModal} className="closeButton">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <label htmlFor="inputDataInicio">Data de início</label>
          <input type="date" id="inputDataInicio" value={d1} onChange={(e) => setD1(e.target.value)} />
          <label htmlFor="inputDataFim">Data de fim</label>
          <input type="date" id="inputDataFim" value={d2} onChange={(e) => setD2(e.target.value)} />
          <div className="buttons">
            <button onClick={cleanFilters}>
              <FontAwesomeIcon icon={faTrash} />
              Limpar
            </button>
            <button onClick={saveFilters}>
              <FontAwesomeIcon icon={faFloppyDisk} />
              Salvar
            </button>
          </div>
        </IntervaloDataInputModalStyle>
      </Modal>
    </IntervaloDataInputStyle>
  );
};
