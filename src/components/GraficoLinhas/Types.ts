export interface RecordQuery {
  nitrogenio: string;
  fosforo: string;
  potassio: string;
  umidade: string;
  temperatura: string;
  pH: string;
  dataDeRegistro: string;
  luz: string;
  lux: string;
  idPlanta: string;
  nomeEspecie: string;
  nuRegistro: number;
  imagem?: string;
  diagnostico?: string;
}

export interface StatesParams {
  setIntervaloDeBusca: React.Dispatch<number | string>;
  intervaloDeBusca: number | string;
  allRecordsIsLoading: boolean;
}

export interface GraficoLinhasProps {
  records: RecordQuery[];
  params: StatesParams;

  className?: string;
}
