import { FormatarDatas } from "../../assets/utils/FormatDate";
import { RecordQuery } from "./Types";

const unidades = {
  NPK: "Unidade de medida: mg/Kg",
  temperatura: "Unidade de medida: ºC",
  pH: "",
  umidade: "Unidade de medida: %",
  luz: "Unidade de medida: %",
} as const;

export type TipoGrafico = keyof typeof unidades;

export const selecionaGrafico = (tipoGrafico: TipoGrafico, records: RecordQuery[]) => {
  const newDataValues = records
    ? ({
        NPK: [
          ["Dia", "Nitrogênio", "Fósforo", "Potássio"],
          ...records.map((record) => [
            FormatarDatas.diaMes(record.dataDeRegistro),
            Number(record.nitrogenio),
            Number(record.fosforo),
            Number(record.potassio),
          ]),
        ],
        temperatura: [
          ["Dia", "Temperatura"],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.temperatura)]),
        ],
        umidade: [
          ["Dia", "Umidade"],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.umidade)]),
        ],
        pH: [
          ["Dia", "pH"],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.pH)]),
        ],
        luz: [
          ["Dia", "Luz"],
          ...records.map((record) => [FormatarDatas.diaMes(record.dataDeRegistro), Number(record.luz)]),
        ],
      } as const)
    : undefined;

  return newDataValues[tipoGrafico] ?? "Unidade de medida não especificada";
};

export const unidadeMedida = (tipoGrafico: TipoGrafico) => {
  return unidades[tipoGrafico] !== undefined ? unidades[tipoGrafico] : "Unidade de medida não especificada";
};
