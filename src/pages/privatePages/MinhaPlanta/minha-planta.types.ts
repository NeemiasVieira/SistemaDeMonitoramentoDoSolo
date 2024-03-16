export interface Saude{
    nitrogenio: string;
    fosforo: string;
    potassio: string;
    umidade: string;
    temperatura: string;
    pH: string;
    estadoGeral: string;
    ultimaAtualizacao: string;
    alertas: string[];
}

export interface Planta{
    id: string;
    idDono: string;
    nome: string;
    especie: string;
    dataDaPlantacao: Date; 
}