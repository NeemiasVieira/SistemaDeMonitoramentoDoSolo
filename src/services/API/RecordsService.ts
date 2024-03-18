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

        const token = `Bearer ${localStorage.getItem("token")}`;

        intervaloDeBusca = intervaloDeBusca === "Selecione" ? null : Number(intervaloDeBusca);
        intervaloDeDias = intervaloDeDias === "Selecione" ? null : Number(intervaloDeDias);


        const query = `query GetAllRecordsByPlant($idPlanta: String!, $intervaloDeDias: Float, $intervaloDeBusca: Float ) {
            getAllRecordsByPlant( idPlanta: $idPlanta, intervaloDeDias: $intervaloDeDias, intervaloDeBusca: $intervaloDeBusca )   
            { nitrogenio fosforo potassio umidade temperatura pH dataDeRegistro luz } }`
        
        const options = { headers: { Authorization: token }}
        const variables = {idPlanta, intervaloDeDias, intervaloDeBusca};
        
        await SMS_API.post('', {query, variables},options).then((response) => {
            if(response.data && response.data.data && response.data.data.getAllRecordsByPlant) this.setResponse(response.data.data.getAllRecordsByPlant);
            else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
        })
        .catch(error => this.setError(error.message));
    }
}