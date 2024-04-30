import React, { useEffect, useState } from "react";
import { SpecieUCModalStyleIndex } from "./SpecieUCModalStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Specie } from "../../../Especie/Types";
import { useCreateSpecie } from "../../../../services/API/Species/useCreateSpecie";
import { useUpdateSpecie } from "../../../../services/API/Species/useUpdateSpecie";
import { useNotificacoes } from "../../../../contexts/NotificacoesProvider";
import { Loading } from "../../../Loading/Loading";
import Modal from "react-modal";
Modal.setAppElement("#root");

interface Parametro {
  min: string;
  max: string;
}

interface Parametros {
  nitrogenio: Parametro;
  fosforo: Parametro;
  potassio: Parametro;
  luz: Parametro;
  umidade: Parametro;
  temperatura: Parametro;
  pH: Parametro;
}

interface SpecieUCModalProps {
  isModalOpen: boolean;
  type: string;
  closeModal: () => void;
  especie?: Specie;
}

const verificarCamposPreenchidos = (especie: Specie): boolean => {

  if (!especie.nome || especie.nome.trim() === "") {
    return false;
  }

  if (!especie.descricao || especie.descricao.trim() === "") {
    return false;
  }

  for (const parametro of Object.values(especie.parametros)) {
    if (!parametro.min || parametro.min.trim() === "" || !parametro.max || parametro.max.trim() === "") {
      return false;
    }
  }
  return true;
}

export const SpecieUCModal: React.FC<SpecieUCModalProps> = ({ isModalOpen, type, closeModal, especie }) => {

  const defaultSpecie: Specie = {
    id: "",
    nome: "",
    descricao: "",
    parametros: {
      nitrogenio: { min: "", max: "" },
      fosforo: { min: "", max: "" },
      potassio: { min: "", max: "" },
      luz: { min: "", max: "" },
      umidade: { min: "", max: "" },
      temperatura: { min: "", max: "" },
      pH: { min: "", max: "" },
    },
  };
  

  const [especieI, setEspecieI] = useState<Specie>(defaultSpecie);

  const { confirmCreateSpecie, createSpecieIsLoading, createSpecieError } = useCreateSpecie(especieI);
  const { confirmUpdateSpecie, updateSpecieIsLoading, updateSpecieError } = useUpdateSpecie(especieI)  
  const { notificar } = useNotificacoes();

  useEffect(() => {
    if(createSpecieError){
      notificar({
        tipo: "ERRO",
        mensagem: createSpecieError,
        tempoEmSeg: 4
      })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createSpecieError])

  useEffect(() =>{
    if(updateSpecieError){
      notificar({
        tipo: "ERRO",
        mensagem: updateSpecieError,
        tempoEmSeg: 4
      })
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSpecieError])


  useEffect(() => {

    if(especie){
      const specieFromEspecie: Specie = {
        id: especie?.id ?? "",
        nome: especie?.nome ?? "",
        descricao: especie?.descricao ?? "",
        parametros: {
          nitrogenio: { min: especie?.parametros?.nitrogenio?.min, max: especie?.parametros?.nitrogenio?.max },
          fosforo: { min: especie?.parametros?.fosforo?.min, max: especie?.parametros?.fosforo?.max },
          potassio: { min: especie?.parametros?.potassio?.min, max: especie?.parametros?.potassio?.max },
          luz: { min: especie?.parametros?.luz?.min, max: especie?.parametros?.luz?.max },
          umidade: { min: especie?.parametros?.umidade?.min, max: especie?.parametros?.umidade?.max },
          temperatura: { min: especie?.parametros?.temperatura?.min, max: especie?.parametros?.temperatura?.max },
          pH: { min: especie?.parametros?.pH?.min, max: especie?.parametros?.pH?.max },
        },
      };
      setEspecieI(specieFromEspecie);
    }
    else{
      setEspecieI(defaultSpecie);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [especie])

  const setNome = (nome: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      nome: nome,
    }));
  };

  const setDescricao = (descricao: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      descricao: descricao,
    }));
  };

  const setMinParametro = (parametro: keyof Parametros, min: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      parametros: {
        ...prevState.parametros,
        [parametro]: {
          ...prevState.parametros[parametro],
          min: min,
        },
      },
    }));
  };

  const setMaxParametro = (parametro: keyof Parametros, max: string) => {
    setEspecieI((prevState) => ({
      ...prevState,
      parametros: {
        ...prevState.parametros,
        [parametro]: {
          ...prevState.parametros[parametro],
          max: max,
        },
      },
    }));
  };

  useEffect(() => {
    if (!updateSpecieIsLoading && !createSpecieIsLoading) {
      closeModal();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateSpecieIsLoading, createSpecieIsLoading]);
  

  const handleChangeMin = (parametro: keyof Specie["parametros"], event: React.ChangeEvent<HTMLInputElement>) => {
    setMinParametro(parametro, event.target.value);
  };

  const handleChangeMax = (parametro: keyof Specie["parametros"], event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxParametro(parametro, event.target.value);
  };

  const handleCriarEspecie = () => {
    if(!verificarCamposPreenchidos(especieI)){
      notificar({
        tipo: "ERRO",
        mensagem: "Toodos os campos precisam ser preenchidos",
        tempoEmSeg: 4
      })
      return;
    }
    confirmCreateSpecie();
  }

  const handleAtualizarEspecie = () => {
    if(!verificarCamposPreenchidos(especieI)){
      notificar({
        tipo: "ERRO",
        mensagem: "Toodos os campos precisam ser preenchidos",
        tempoEmSeg: 4
      })
      return;
    }
    confirmUpdateSpecie();

  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      border: "solid #aaa 1px",
      borderRadius: "15px",
      display: "flex",
      alignItems: "center",
      flexFlow: "column wrap",
      width: "80vw",
      height: "590px",
      maxWidth: "370px",
      backgroundColor: "#fff",
      opacity: "1",
      boxShadow: "0px 16px 16px 0px rgba(0, 0, 0, 0.2)",
      marginTop: "25px",
      zIndex: "3",
      overflow: "hidden"
    },
  };

  return (
 
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Are you sure" style={customStyles}>
        <SpecieUCModalStyleIndex>

          <button onClick={closeModal} className="closeButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>

          {type === "Create" && <h2>Criar Nova Espécie</h2>}
          {type === "Update" && <h2>Atualizar Espécie</h2>}

          <div className="DivInputNome">
            <p>Nome</p>
            <input value={especieI.nome} onChange={(event) => setNome(event.target.value)} />
          </div>
          <div className="DivInputDescricao">
            <p>Descrição</p>
            <textarea
              value={especieI.descricao}
              onChange={(event) => setDescricao(event.target.value)}
              cols={25}
              rows={4}
              maxLength={400}
            />
          </div>
          {Object.entries(especieI.parametros).map(([parametro, valor]) => (
            <div key={parametro} className="DivInputParametro">
              <p>{parametro}</p>
              <label htmlFor={`${parametro}MinInput`}>Min</label>
              <input
                id={`${parametro}MinInput`}
                value={valor.min}
                onChange={(event) => handleChangeMin(parametro as keyof Specie["parametros"], event)}
              />
              <label htmlFor={`${parametro}MaxInput`}>Máx</label>
              <input
                id={`${parametro}MaxInput`}
                value={valor.max}
                onChange={(event) => handleChangeMax(parametro as keyof Specie["parametros"], event)}
              />
            </div>
          ))}
          {type === "Create" && !createSpecieIsLoading && <button className="criarAtualizarButton" onClick={handleCriarEspecie}>Criar</button>}
          {type === "Update" && !updateSpecieIsLoading && <button className="criarAtualizarButton" onClick={handleAtualizarEspecie}>Atualizar</button>}
          {updateSpecieIsLoading && <Loading minHeight={"50px"} logoHeight="50px" logoWidth="50px"/>}
          {createSpecieIsLoading && <Loading minHeight={"50px"} logoHeight="50px" logoWidth="50px"/>}
        </SpecieUCModalStyleIndex>
      </Modal>
  );
};