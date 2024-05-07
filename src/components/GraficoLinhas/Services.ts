import { FormatarDatas } from "../../assets/utils/FormatDate";
import { RecordQuery } from "../../services/API/Records/useGetAllRecords";

export const selecionaGrafico = (tipoGrafico: string, records: RecordQuery[]) => {
  let newData: any = [];

  switch (tipoGrafico) {
    case "NPK":
      newData = [
        ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
        ...records?.map((record) => [
          FormatarDatas.diaMes(record.dataDeRegistro),
          Number(record.nitrogenio),
          Number(record.fosforo),
          Number(record.potassio),
        ]),
      ];
      break;
    case "temperatura":
      newData = [
        ["Dia", "Temperatura"],
        ...records?.map((record) => [
          FormatarDatas.diaMes(record.dataDeRegistro),
          Number(record.temperatura),
        ]),
      ];
      break;
    case "pH":
      newData = [
        ["Dia", "pH"],
        ...records?.map((record) => [
          FormatarDatas.diaMes(record.dataDeRegistro),
          Number(record.pH),
        ]),
      ];
      break;
    case "umidade":
      newData = [
        ["Dia", "Umidade"],
        ...records?.map((record) => [
          FormatarDatas.diaMes(record.dataDeRegistro),
          Number(record.umidade),
        ]),
      ];
      break;
    case "luz":
      newData = [
        ["Dia", "Luz"],
        ...records?.map((record) => [
          FormatarDatas.diaMes(record.dataDeRegistro),
          Number(record.luz),
        ]),
      ];
      break;
  }
  return newData;
};

export const unidadeMedida = (tipoGrafico: string) => {
  let unidadeMedida;
  switch(tipoGrafico){
    case "NPK":
      unidadeMedida = "Unidade de medida: mg/Kg";
      break;
    case "temperatura":
      unidadeMedida = "Unidade de medida: ºC"
      break;
    case "pH":
      unidadeMedida = ""
      break;
    case "umidade":
      unidadeMedida = "Unidade de medida: %"
      break;
    case "luz":
      unidadeMedida = "Unidade de medida: %"
      break;
  }
  return unidadeMedida
}