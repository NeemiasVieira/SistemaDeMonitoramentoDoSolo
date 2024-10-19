import { Notificar } from '@contexts/NotificacoesProvider';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';

export const isRecordValid = (record: Record, notificar: Notificar) => {
  const { nitrogenio, fosforo, potassio, umidade, temperatura, pH, lux } = record;

  const isNumber = (value: string) => /^-?\d+(\.\d+)?$/.test(value);
  const isPositiveNumber = (value: string) => /^\d+(\.\d+)?$/.test(value);

  if (!isPositiveNumber(nitrogenio) || Number(nitrogenio) < 0) {
    notificar({ tipo: 'ERRO', mensagem: 'Nitrogênio inválido!', tempoEmSeg: 3 });
    return false;
  }
  if (!isPositiveNumber(fosforo) || Number(fosforo) < 0) {
    notificar({ tipo: 'ERRO', mensagem: 'Fósforo inválido!', tempoEmSeg: 3 });
    return false;
  }
  if (!isPositiveNumber(potassio) || Number(potassio) < 0) {
    notificar({ tipo: 'ERRO', mensagem: 'Potássio inválido!', tempoEmSeg: 3 });
    return false;
  }

  if (!isPositiveNumber(umidade) || Number(umidade) < 0 || Number(umidade) > 100) {
    notificar({ tipo: 'ERRO', mensagem: 'Umidade deve estar entre 0 e 100!', tempoEmSeg: 3 });
    return false;
  }

  if (!isNumber(temperatura)) {
    notificar({ tipo: 'ERRO', mensagem: 'Temperatura inválida!', tempoEmSeg: 3 });
    return false;
  }

  if (!isPositiveNumber(pH) || Number(pH) < 0 || Number(pH) > 14) {
    notificar({ tipo: 'ERRO', mensagem: 'pH deve estar entre 0 e 14!', tempoEmSeg: 3 });
    return false;
  }

  if (!isPositiveNumber(lux) || Number(lux) < 0) {
    notificar({ tipo: 'ERRO', mensagem: 'Lux inválido!', tempoEmSeg: 3 });
    return false;
  }

  return true;
};
