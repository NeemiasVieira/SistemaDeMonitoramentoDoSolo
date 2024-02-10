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
        const token = `Bearer ${localStorage.getItem("token")}`;
        const query = `query GetPlantasByDonoId {        
          getPlantasByDonoId { id nome especie dataDaPlantacao }}`;

          const options = { headers: {  Authorization: token, }};
      
        await SMS_API.post('', {query}, options)
        .then(response => {
            if(response.data && response.data.data && response.data.data.getPlantasByDonoId) this.setResponse(response.data.data.getPlantasByDonoId);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

    async getRelatorioDeSaude(idPlanta: string){

        const token = `Bearer ${localStorage.getItem("token")}`
        const options = { headers: { Authorization: token }}
        const variables = { idPlanta };
        const query = `query GetSaudeByPlantId($idPlanta: String!) {
            getSaudeByPlantId(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura
                pH estadoGeral ultimaAtualizacao alertas }}`;                

        await SMS_API.post('', {query, variables}, options).then((response) => {
            if(response.data && response.data.data && response.data.data.getSaudeByPlantId) this.setResponse(response.data.data.getSaudeByPlantId);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

    async getUltimoRegistro(idPlanta: string){
        const token = `Bearer ${localStorage.getItem("token")}`;
        const options = { headers: {  Authorization: token, }};
        const variables = { idPlanta }
        const query = `query GetLastRecordByPlant($idPlanta: String!) {
            getLastRecordByPlant(idPlanta: $idPlanta) { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro}}`; 

        await SMS_API.post('', {query, variables}, options).then((response) => {
            if(response.data && response.data.data && response.data.data.getLastRecordByPlant) this.setResponse(response.data.data.getLastRecordByPlant);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }

}