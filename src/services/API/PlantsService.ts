import SMS_API from "./sms-api";

export class PlantsService {
    SMS_API;
    setResponse;
    setError;

    constructor(setResponse: any, setError: any){
        this.SMS_API = SMS_API;
        this.setResponse = setResponse;
        this.setError = setError;
    }

    async getPlantsByOwnerID(idDono: string){
        const Query = `query GetPlantasByDonoId($idDono: String!) {        
          getPlantasByDonoId(idDono: $idDono) { id nome especie dataDaPlantacao }}`;

          const options = {query: Query, variables: { idDono: idDono }};

        await SMS_API.post('', options)
        .then(response => {
            if(response.data && response.data.data && response.data.data.getPlantasByDonoId) this.setResponse(response.data.data.getPlantasByDonoId);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

    async getRelatorioDeSaude(idPlanta: string){

        const Query = `query GetSaudeByPlantId($idPlanta: String!) {
            getSaudeByPlantId(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura
                pH estadoGeral ultimaAtualizacao alertas }}`;
        const options = {query: Query, variables: { idPlanta }}           

        await SMS_API.post('', options).then((response) => {
            if(response.data && response.data.data && response.data.data.getSaudeByPlantId) this.setResponse(response.data.data.getSaudeByPlantId);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

    async getUltimoRegistro(idPlanta: string){
        const Query = `query GetLastRecordByPlant($idPlanta: String!) {
            getLastRecordByPlant(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro}}`;
        const options = {query: Query, variables: {idPlanta}}    

        await SMS_API.post('', options).then((response) => {
            if(response.data && response.data.data && response.data.data.getLastRecordByPlant) this.setResponse(response.data.data.getLastRecordByPlant);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

}