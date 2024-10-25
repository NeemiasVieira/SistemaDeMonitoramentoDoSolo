import { Record } from '@services/API/Records/useGetAllRecordsPaginated';

export interface StatesParams {
  setIntervaloDeBusca: React.Dispatch<number | string>;
  intervaloDeBusca: number | string;
  allRecordsIsLoading: boolean;
}

export interface GraficoLinhasProps {
  records: Record[];
  params: StatesParams;

  className?: string;
}
