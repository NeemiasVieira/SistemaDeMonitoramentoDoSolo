import SMS_API from "../../sms-api";

export class PlantsService {
    SMS_API;
    setResponse;
    setError;

    constructor(setResponse, setError){
        this.SMS_API = SMS_API;
        this.setResponse = setResponse;
        this.setError = setError;
    }

    async getPlantsByOwnerID(id){
        await SMS_API.get(`/plantas/buscar/${id}`).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }

    async getRelatorioDeSaude(idPlanta){
        await SMS_API.get(`/plantas/saude/${idPlanta}`).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }

}