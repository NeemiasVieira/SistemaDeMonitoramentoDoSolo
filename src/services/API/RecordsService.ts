import { AxiosInstance } from "axios";
import SMS_API from "./sms-api";

export class RecordsService{
    private SMS_API!: AxiosInstance;
    setResponse;
    setError;

    constructor(setResponse: any, setError: any){
        this.setResponse = setResponse;
        this.setError = setError;
    }

    async getRecordsByPlantID(id: string, intervaloDeDias?: string | null, intervaloDeBusca?: string | null){

        if(intervaloDeBusca === "Selecione") intervaloDeBusca = null;
        if(intervaloDeDias === "Selecione") intervaloDeDias = null;

        let url = `/registros/${id}`
        if(intervaloDeDias && !intervaloDeBusca) url += `?intervaloDeDias=${Number(intervaloDeDias)}`
        if(intervaloDeBusca && !intervaloDeDias) url += `?intervaloDeBusca=${Number(intervaloDeBusca)}`
        if(intervaloDeBusca && intervaloDeDias) url += `?intervaloDeDias=${Number(intervaloDeDias)}&intervaloDeBusca=${Number(intervaloDeBusca)}`

        await SMS_API.get(url).then(response => this.setResponse(response.data))
        .catch(error => this.setError(error));
    }
}