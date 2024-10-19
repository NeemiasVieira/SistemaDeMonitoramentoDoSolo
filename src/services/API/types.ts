export enum QueryKeys {
  ALL_PLANTS = 'useGetAllPlants',
  PLANT = 'useGetPlant',
  RELATORIO_SAUDE = 'useGetRelatorioSaude',
  ALL_RECORDS = 'useGetAllRecords',
  ALL_RECORDS_PAGINATED = 'useGetAllRecordsPaginated',
  LAST_RECORD = 'useGetLastRecord',
  RECORD = 'useGetRecord',
  RELATORIO_SAUDE_POR_REGISTRO = 'useGetRelatorioSaudePorRegistro',
  ALL_SPECIES = 'useGetAllSpecies',
  SPECIE = 'useGetSpecie',
  SELECT_SPECIE = 'useSelectSpecie',
  SPECIE_BY_PLANT_ID = 'useGetSpecieByPlantId',
}

export enum MutationKeys {
  CANCELAR_SOLICITACAO = 'useCancelarSolicitacao',
  CREATE_PLANT = 'useCreatePlant',
  DELETE_PLANT = 'useDeletePlant',
  ENVIAR_SOLICITACAO = 'useEnviarSolicitacao',
  UPDATE_PLANT = 'useUpdatePlant',
  GENERATE_PDF = 'useGeneratePdf',
  CREATE_SPECIE = 'useCreateSpecie',
  DELETE_SPECIE = 'useDeleteSpecie',
  UPDATE_SPECIE = 'useUpdateSpecie',
  LOGIN = 'useLogin',
  SIGNUP = 'useSignup',
  CREATE_RECORD = 'useCreateRecord',
}
