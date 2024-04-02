interface Parametro{
  min: string;
  max: string;
}

interface Parametros{
  nitrogenio: Parametro;
  fosforo: Parametro;
  potassio: Parametro;
  luz: Parametro;
  umidade: Parametro;
  temperatura: Parametro;
  pH: Parametro;
}

export interface Specie{
  id: string;
  nome: string;
  descricao: string;
  parametros: Parametros;
}

