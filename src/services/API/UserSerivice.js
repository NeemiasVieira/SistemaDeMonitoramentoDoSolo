import SMS_API from "./sms-api";

export class UserService {
    SMS_API;
    setResponse;
    setError;

    constructor(setResponse, setError){
        this.SMS_API = SMS_API;
        this.setResponse = setResponse;
        this.setError = setError;
    }

    async login(email, senha){
        await SMS_API.post("/usuarios/login", {email, senha}).then((response) => this.setResponse(response))
        .catch((error) => this.setError(error));
    }

    async cadastrarNovoUsuario(nome, email, senha){
        await SMS_API.post("/usuarios", {nome, email, senha}).then(response => this.setResponse(response))
        .catch(error => this.setError(error));
    }
}