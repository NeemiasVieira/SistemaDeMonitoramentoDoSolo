import SMS_API from "./sms-api";

export class RecordsService{
    SMS_API;
    setResponse;
    setError;

    constructor(setResponse, setError){
        this.setResponse = setResponse;
        this.setError = setError;
    }

    async getRecordsByPlantID(id, intervaloDeDias = null, intervaloDeBusca = null){

        if(intervaloDeBusca === "Selecione") intervaloDeBusca = null;
        if(intervaloDeDias === "Selecione") intervaloDeDias = null;

        let url = `/registros/${id}`
        if(intervaloDeDias && !intervaloDeBusca) url += `?intervaloDeDias=${Number(intervaloDeDias)}`
        if(intervaloDeBusca && !intervaloDeDias) url += `?intervaloDeBusca=${Number(intervaloDeBusca)}`
        if(intervaloDeBusca && intervaloDeDias) url += `?intervaloDeDias=${Number(intervaloDeDias)}&intervaloDeBusca=${Number(intervaloDeBusca)}`
        
        console.log(url);

        await SMS_API.get(url).then(response => this.setResponse(response.data))
        .catch(error => this.setError(error));
    }
}