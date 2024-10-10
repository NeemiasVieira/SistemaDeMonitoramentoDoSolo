export const tip1 =
  "Nesta etapa, caso os sensores estejam ativos, o registro será processado em aproximadamente 40 segundos.";
export const tip2 =
  "Caso os sensores estejam desligados não se preocupe, pois assim que forem ativados, a sua solicitação de registro será processada :)";

export type SolicitacaoNovoRegistro = "nenhuma" | "aguardando" | "confirmado";

export enum ESolicitacaoNovoRegistro {
  NENHUMA = "nenhuma",
  AGUARDANDO = "aguardando",
  CONFIRMADO = "confirmado",
}

export enum Status {
  NENHUMA_SOLICITACAO = "Nenhuma Solicitação ",
  SOLICITACAO_ENVIADA = "Solicitação Enviada",
  SOLICITACAO_CONCLUIDA = "Solicitação Concluída",
}

export const Titulo = {
  nenhuma: Status.NENHUMA_SOLICITACAO,
  aguardando: Status.SOLICITACAO_ENVIADA,
  confirmado: Status.SOLICITACAO_CONCLUIDA,
} as const;

export const mapearTitulo = (solicitacaoNovoRegistro: SolicitacaoNovoRegistro) => {
  return Titulo[solicitacaoNovoRegistro] ?? "";
};

export const mapearTituloBotao = (solicitacaoNovoRegistro: SolicitacaoNovoRegistro) => {
  switch (solicitacaoNovoRegistro) {
    case "nenhuma":
      return "Solicitar novo registro";
    case "aguardando":
      return "Cancelar solicitação";
    case "confirmado":
      return "";
  }
};
