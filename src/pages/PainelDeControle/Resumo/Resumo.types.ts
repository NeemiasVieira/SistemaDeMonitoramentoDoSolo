export interface Saude {
  nitrogenio: string;
  fosforo: string;
  potassio: string;
  umidade: string;
  temperatura: string;
  pH: string;
  luz: string;
  estadoGeral: string;
  ultimaAtualizacao: string;
  alertas: string[];
}

export interface Planta {
  id: string;
  idDono?: string;
  simulado: boolean;
  idEspecie: string;
  nome: string;
  especie: string;
  dataDaPlantacao: string;
}
