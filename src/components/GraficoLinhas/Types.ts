
export interface RecordQuery {
  nitrogenio: string,
  fosforo: string,
  potassio: string,
  umidade: string,
  temperatura: string,
  pH: string,
  dataDeRegistro: string 
  luz: string
  lux: string;
  idPlanta: string;
  nomeEspecie: string;
  imagem?: string;
  diagnostico?: string;
}

export interface StatesParams{
  setIntervaloDeDias: React.Dispatch<number | string>;
  setIntervaloDeBusca: React.Dispatch<number | string>;
  intervaloDeDias: number | string,
  intervaloDeBusca: number | string;
  allRecordsIsLoading: boolean;
}

export interface GraficoLinhasProps{
  records: RecordQuery[];
  params: StatesParams;

  className?: string;
}