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

    async getPlantsByOwnerID(id: string){
        await SMS_API.get(`/plantas/buscar/${id}`).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }

    async getRelatorioDeSaude(idPlanta: string){
        await SMS_API.get(`/plantas/saude/${idPlanta}`).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }

    async getUltimoRegistro(idPlanta: string){
        await SMS_API.get(`/plantas/registro/${idPlanta}`).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }

}