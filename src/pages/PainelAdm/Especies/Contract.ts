import { Specie } from '@components/Especie/Types';
import { Notificar } from '@contexts/NotificacoesProvider';

const isEmpty = (value: string) => !value || value.trim() === '';
const isNumber = (value: string) => /^-?\d+(\.\d+)?$/.test(value);
const isPositiveNumber = (value: string) => /^\d+(\.\d+)?$/.test(value);

export const isSpecieValid = (especie: Specie, notificar: Notificar): boolean => {
  const notifyError = (mensagem: string) => {
    notificar({
      tipo: 'ALERTA',
      mensagem,
      tempoEmSeg: 4,
    });
  };

  if (isEmpty(especie.nome)) {
    notifyError('O campo nome é obrigatório');
    return false;
  }

  for (const parametro of Object.values(especie.parametros)) {
    if (isEmpty(parametro.min) || isEmpty(parametro.max)) {
      notifyError('Todos os parâmetros são obrigatórios');
      return false;
    }

    if (parametro.min >= parametro.max) {
      notifyError('O parâmetro mínimo deve ser menor que o parâmetro máximo.');
      return false;
    }
  }

  const { nitrogenio, fosforo, potassio, umidade, temperatura, pH, luz } = especie.parametros;

  if (!isPositiveNumber(nitrogenio.min) || Number(nitrogenio.min) < 0) {
    notifyError('Os valores de Nitrogênio devem ser um número maior ou igual a zero.');
    return false;
  }
  if (!isPositiveNumber(fosforo.min) || Number(fosforo.min) < 0) {
    notifyError('Os valores de Fósforo devem ser um número maior ou igual a zero');
    return false;
  }
  if (!isPositiveNumber(potassio.min) || Number(potassio.min) < 0) {
    notifyError('Os valores de Potássio devem ser um número maior ou igual a zero');
    return false;
  }
  if (!isPositiveNumber(umidade.min) || Number(umidade.min) < 0 || Number(umidade.min) > 100) {
    notifyError('Os valores de Umidade deve estar entre 0 e 100.');
    return false;
  }
  if (!isNumber(temperatura.min)) {
    notifyError('Os valores de Temperatura devem ser um número.');
    return false;
  }
  if (!isPositiveNumber(pH.min) || Number(pH.min) < 0 || Number(pH.min) > 14) {
    notifyError('Os valores de pH deve estar entre 0 e 14.');
    return false;
  }
  if (!isPositiveNumber(luz.min) || Number(luz.min) < 0) {
    notifyError('Os valores de Luz devem ser um número maior ou igual a zero');
    return false;
  }

  if (!isPositiveNumber(nitrogenio.max) || Number(nitrogenio.max) < 0) {
    notifyError('Os valores de Nitrogênio devem ser um número maior ou igual a zero.');
    return false;
  }
  if (!isPositiveNumber(fosforo.max) || Number(fosforo.max) < 0) {
    notifyError('Os valores de Fósforo devem ser um número maior ou igual a zero.');
    return false;
  }
  if (!isPositiveNumber(potassio.max) || Number(potassio.max) < 0) {
    notifyError('Os valores de Potássio devem ser um número maior ou igual a zero.');
    return false;
  }
  if (!isPositiveNumber(umidade.max) || Number(umidade.max) < 0 || Number(umidade.max) > 100) {
    notifyError('Os valores de Umidade deve ser entre 0 e 100.');
    return false;
  }
  if (!isNumber(temperatura.max)) {
    notifyError('Os valores de Temperatura devem ser um número.');
    return false;
  }
  if (!isPositiveNumber(pH.max) || Number(pH.max) < 0 || Number(pH.max) > 14) {
    notifyError('Os valores de pH devem ser entre 0 e 14.');
    return false;
  }
  if (!isPositiveNumber(luz.max) || Number(luz.max) < 0) {
    notifyError('Os valores de Luz devem ser um número maior ou igual a zero.');
    return false;
  }

  return true;
};
