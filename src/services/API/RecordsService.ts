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

    async getRecordsByPlantID(idPlanta: string, intervaloDeDias?: any, intervaloDeBusca?: any){

        intervaloDeBusca = intervaloDeBusca === "Selecione" ? null : Number(intervaloDeBusca);
        intervaloDeDias = intervaloDeDias === "Selecione" ? null : Number(intervaloDeDias);


        const Query = `query GetAllRecordsByPlant($idPlanta: String!, $intervaloDeDias: Float, $intervaloDeBusca: Float ) {
            getAllRecordsByPlant( idPlanta: $idPlanta, intervaloDeDias: $intervaloDeDias, intervaloDeBusca: $intervaloDeBusca )   
            { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro } }`
        
        const options = {query: Query, variables: {idPlanta, intervaloDeDias, intervaloDeBusca}}
        await SMS_API.post('', options).then((response) => {
            if(response.data && response.data.data && response.data.data.getAllRecordsByPlant) this.setResponse(response.data.data.getAllRecordsByPlant);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }
}