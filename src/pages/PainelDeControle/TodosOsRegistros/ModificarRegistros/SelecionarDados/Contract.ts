import { Notificar } from '@contexts/NotificacoesProvider';
import { Record } from '@services/API/Records/useGetAllRecordsPaginated';

export const isRecordValid = (record: Record, notificar: Notificar) => {
  const { nitrogenio, fosforo, potassio, umidade, temperatura, pH, lux } = record;

  const isNumber = (value: string) => /^-?\d+(\.\d+)?$/.test(value);
  const isPositiveNumber = (value: string) => /^\d+(\.\d+)?$/.test(value);
  const tipo = 'ALERTA';

  if (!isPositiveNumber(nitrogenio) || Number(nitrogenio) < 0) {
    notificar({ tipo, mensagem: 'Nitrogênio deve ser um número maior que zero.' });
    return false;
  }
  if (!isPositiveNumber(fosforo) || Number(fosforo) < 0) {
    notificar({ tipo, mensagem: 'Fósforo deve ser um número maior que zero.' });
    return false;
  }
  if (!isPositiveNumber(potassio) || Number(potassio) < 0) {
    notificar({ tipo, mensagem: 'Potássio deve ser um número maior que zero.' });
    return false;
  }

  if (!isPositiveNumber(umidade) || Number(umidade) < 0 || Number(umidade) > 100) {
    notificar({ tipo, mensagem: 'Umidade deve ser um número entre 0 e 100.' });
    return false;
  }

  if (!isNumber(temperatura)) {
    notificar({ tipo, mensagem: 'Temperatura deve ser um número' });
    return false;
  }

  if (!isPositiveNumber(pH) || Number(pH) < 0 || Number(pH) > 14) {
    notificar({ tipo, mensagem: 'pH deve ser um número entre 0 e 14.' });
    return false;
  }

  if (!isPositiveNumber(lux) || Number(lux) < 0) {
    notificar({ tipo, mensagem: 'Lux deve ser um número maior que zero.' });
    return false;
  }

  return true;
};
