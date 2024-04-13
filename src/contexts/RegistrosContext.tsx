import React, { createContext, useContext, useState } from "react";
import { Record } from "../services/API/Records/useGetAllRecordsPaginated";

interface RegistrosProviderProps {
  children: React.ReactNode;
}

interface IRegistrosContext {
  registroEmMemoria: Record;
  backUrl: string;
  setBackUrl: React.Dispatch<React.SetStateAction<string>>
  setRegistroEmMemoria: React.Dispatch<React.SetStateAction<Record>>;
}

const RegistrosContext = createContext<IRegistrosContext>({
  registroEmMemoria: {
    id: "",
    idPlamta: "",
    nitrogenio: "",
    fosforo: "",
    potassio: "",
    umidade: "",
    temperatura: "",
    pH: "",
    dataDeRegistro: "",
    luz: "",
    nuRegistro: 0,
  },
  setRegistroEmMemoria: () => {},
  backUrl: "",
  setBackUrl: () => {}
});

export const RegistrosProvider: React.FC<RegistrosProviderProps> = ({ children }) => {
  const [registroEmMemoria, setRegistroEmMemoria] = useState<Record>();
  const [backUrl, setBackUrl] = useState<string>();

  return (
    <RegistrosContext.Provider value={{ registroEmMemoria, backUrl, setBackUrl, setRegistroEmMemoria }}>
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
