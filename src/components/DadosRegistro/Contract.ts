interface Parametro {
  min: string;
  max: string;
}

enum HealthClass {
  HEALTHY = 'Saudavel',
  EXCESS = 'Excesso',
  DEFICIENCY = 'Deficiencia',
  Default = 'Default',
}

export const getInfoColor = (value: string, param: Parametro): HealthClass => {
  if (!value || !param) return;

  const numericValue = Number(value);
  const min = Number(param.min);
  const max = Number(param.max);

  if (isNaN(numericValue) || isNaN(min) || isNaN(max)) return HealthClass.Default;

  if (numericValue > max) return HealthClass.EXCESS;
  if (numericValue < min) return HealthClass.DEFICIENCY;
  if (numericValue >= min && numericValue <= max) return HealthClass.HEALTHY;

  return HealthClass.Default;
};

export const formatarExibicao = (numeroStr: string): string => {
  if (!numeroStr) return '';

  const numero = Number(numeroStr);
  if (isNaN(numero)) return '';

  if (numero >= 1000) {
    const numeroK = numero / 1000;
    return `${numeroK % 1 === 0 ? numeroK.toFixed(0) : numeroK.toFixed(1).replace('.', ',')}K`;
  }

  return numero % 1 === 0 ? numero.toFixed(0) : numero.toFixed(1).replace('.', ',');
};
