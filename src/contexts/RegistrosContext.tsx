import React, { createContext, useContext, useState } from "react";
import { Record } from "../services/API/Records/useGetAllRecordsPaginated";

interface RegistrosProviderProps {
  children: React.ReactNode;
}

interface IRegistrosContext {
  registroEmMemoria: Record;
  backUrl: string;
  idPlanta: string;
  setBackUrl: React.Dispatch<React.SetStateAction<string>>
  setRegistroEmMemoria: React.Dispatch<React.SetStateAction<Record>>;
  setIdPlanta: React.Dispatch<React.SetStateAction<string>>
}

const RegistrosContext = createContext<IRegistrosContext>({
  registroEmMemoria: {
    id: "",
    idPlanta: "",
    nitrogenio: "",
    fosforo: "",
    potassio: "",
    umidade: "",
    temperatura: "",
    pH: "",
    dataDeRegistro: "",
    luz: "",
    nuRegistro: 0,
    nomeEspecie: "",
    lux: ""
  },
  backUrl: "",
  idPlanta: "",
  setRegistroEmMemoria: () => {},
  setBackUrl: () => {},
  setIdPlanta: () => {}
});

export const RegistrosProvider: React.FC<RegistrosProviderProps> = ({ children }) => {
  const [registroEmMemoria, setRegistroEmMemoria] = useState<Record>();
  const [backUrl, setBackUrl] = useState<string>();
  const [idPlanta, setIdPlanta] = useState<string>();

  return (
    <RegistrosContext.Provider value={{ registroEmMemoria, backUrl, setBackUrl, setRegistroEmMemoria, setIdPlanta, idPlanta }}>
      {children}
    </RegistrosContext.Provider>
  );
};

export const useRegistrosContext = () => {
  const context = useContext(RegistrosContext);
  if (!context) {
    throw new Error("useRegistrosContext deve ser usado dentro de um RegistrosProvider");
  }
  return context;
};
