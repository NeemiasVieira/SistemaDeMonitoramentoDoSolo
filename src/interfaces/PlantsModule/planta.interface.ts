export interface IPlanta {
  id: string;
  nome: string;
  especie: string;
  dataDaPlantacao: string;
}

export interface IRelatorioSaudePlanta {
  nitrogenio: "Deficiência" | "Saudável" | "Excesso";
  fosforo: "Deficiência" | "Saudável" | "Excesso";
  potassio: "Deficiência" | "Saudável" | "Excesso";
  umidade: "Deficiência" | "Saudável" | "Excesso";
  temperatura: "Deficiência" | "Saudável" | "Excesso";
  pH: "Deficiência" | "Saudável" | "Excesso";
  estadoGeral: string;
  ultimaAtualizacao: string;
  alertas: string[];
}
