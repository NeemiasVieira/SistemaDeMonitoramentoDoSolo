import { Dispatch, SetStateAction } from "react";

interface Parametro{
  min: string;
  max: string;
}

interface Parametros{
  nitrogenio: Parametro;
  fosforo: Parametro;
  potassio: Parametro;
  luz: Parametro;
  umidade: Parametro;
  temperatura: Parametro;
  pH: Parametro;
}

export interface Specie{
  id: string;
  nome: string;
  descricao: string;
  parametros: Parametros;
}

export interface EspecieProps {
  especie: Specie;
  openModalUpdate: any;
  setEspecieEscolhidaParaAtualizacao: Dispatch<SetStateAction<Specie>>;
  confirmDeleteSpecie: (id: string) => void 
}

