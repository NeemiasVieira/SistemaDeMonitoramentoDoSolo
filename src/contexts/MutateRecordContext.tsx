import React, { createContext, useCallback, useContext, useState } from 'react';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';
import { Specie } from '@components/Especie/Types';

interface MutateRecordProps {
  children: React.ReactNode;
}

interface IMutateRecordContext {
  record: Record;
  especie: Specie;
  setIdPlanta: (idPlanta: string) => void;
  setIdEspecie: (idEspecie: string) => void;
  setNitrogenio: (nitrogenio: string) => void;
  setFosforo: (fosforo: string) => void;
  setPotassio: (potassio: string) => void;
  setUmidade: (umidade: string) => void;
  setTemperatura: (temperatura: string) => void;
  setPh: (pH: string) => void;
  setDataDeRegistro: (dataDeRegistro: string) => void;
  setLux: (lux: string) => void;
  setImagem: (imagem: string) => void;
  setDiagnostico: (diagnostico: string) => void;
  setRecord: React.Dispatch<React.SetStateAction<Record>>;
  setEspecie: React.Dispatch<React.SetStateAction<Specie>>;
}

const defaultValue: IMutateRecordContext = {
  especie: null,
  record: null,
  setEspecie: () => {},
  setIdPlanta: () => {},
  setIdEspecie: () => {},
  setNitrogenio: () => {},
  setFosforo: () => {},
  setPotassio: () => {},
  setUmidade: () => {},
  setTemperatura: () => {},
  setPh: () => {},
  setDataDeRegistro: () => {},
  setLux: () => {},
  setRecord: () => {},
  setImagem: () => {},
  setDiagnostico: () => {},
};

const MutateRecordContext = createContext<IMutateRecordContext>(defaultValue);

export const MutateRecordProvider: React.FC<MutateRecordProps> = ({ children }) => {
  const [record, setRecord] = useState<Record>(defaultValue.record);
  const [especie, setEspecie] = useState<Specie>();

  const setIdPlanta = useCallback((idPlanta: string) => {
    setRecord((prevState) => ({ ...prevState, idPlanta }));
  }, []);

  const setIdEspecie = useCallback((idEspecie: string) => {
    setRecord((prevState) => ({ ...prevState, idEspecie }));
  }, []);

  const setNitrogenio = useCallback((nitrogenio: string) => {
    setRecord((prevState) => ({ ...prevState, nitrogenio }));
  }, []);

  const setFosforo = useCallback((fosforo: string) => {
    setRecord((prevState) => ({ ...prevState, fosforo }));
  }, []);

  const setPotassio = useCallback((potassio: string) => {
    setRecord((prevState) => ({ ...prevState, potassio }));
  }, []);

  const setUmidade = useCallback((umidade: string) => {
    setRecord((prevState) => ({ ...prevState, umidade }));
  }, []);

  const setTemperatura = useCallback((temperatura: string) => {
    setRecord((prevState) => ({ ...prevState, temperatura }));
  }, []);

  const setPh = useCallback((pH: string) => {
    setRecord((prevState) => ({ ...prevState, pH }));
  }, []);

  const setDataDeRegistro = useCallback((dataDeRegistro: string) => {
    setRecord((prevState) => ({ ...prevState, dataDeRegistro }));
  }, []);

  const setLux = useCallback((lux: string) => {
    setRecord((prevState) => ({ ...prevState, lux }));
  }, []);

  const setImagem = useCallback((imagem: string) => {
    setRecord((prevState) => ({ ...prevState, imagem }));
  }, []);

  const setDiagnostico = useCallback((diagnostico: string) => {
    setRecord((prevState) => ({ ...prevState, diagnostico }));
  }, []);

  return (
    <MutateRecordContext.Provider
      value={{
        record,
        especie,
        setEspecie,
        setIdPlanta,
        setIdEspecie,
        setNitrogenio,
        setFosforo,
        setPotassio,
        setUmidade,
        setTemperatura,
        setPh,
        setDataDeRegistro,
        setLux,
        setRecord,
        setImagem,
        setDiagnostico,
      }}
    >
      {children}
    </MutateRecordContext.Provider>
  );
};

export const useMutateRecordContext = () => {
  const context = useContext(MutateRecordContext);
  if (!context) {
    throw new Error('useMutateRecord deve ser usado dentro de um MutateRecordProvider');
  }
  return context;
};
