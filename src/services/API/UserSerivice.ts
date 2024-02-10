import SMS_API from "./sms-api";

export class UserService {
  SMS_API;
  setResponse;
  setError;

  constructor(setResponse: any, setError: any) {
    this.SMS_API = SMS_API;
    this.setResponse = setResponse;
    this.setError = setError;
  }

  async login(email: string, senha: string) {

    const mutation = `mutation LoginUser($email: String!, $senha: String!) {
        loginUser(email: $email, senha: $senha) { usuario { nome id } token }   }`; 

    const variables = { email, senha };        

    await SMS_API.post("", { query: mutation, variables })
      .then((response) => {
        if(response.data && response.data.data && response.data.data.loginUser) this.setResponse(response.data.data.loginUser)
        else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
    })
      .catch(error => this.setError(error.message));
  }

  async cadastrarNovoUsuario(nome: string, email: string, senha: string) {
  
    const Query = `mutation CreateUser($email: String!, $nome: String!, $senha: String!) {
        createUser(email: $email, nome: $nome, senha: $senha) { id } }`
        
    const options = { query: Query, variables: { email, nome, senha } };
    
    await SMS_API.post("", options)
      .then((response) => {
        if(response.data && response.data.data && response.data.data.createUser) this.setResponse(response.data.data.createUser)
        else if (response.data && response.data.errors) this.setError(response.data.errors[0].message);
      })
      .catch((error) => this.setError(error.message));
  }
}
