import { RecordQuery } from "../../services/API/Records/useGetAllRecords";

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