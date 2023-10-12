import React, { useState, useEffect } from "react";
import { LoginMain } from "./LoginStyle";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { MensagemDeErro } from "../../components/MensagemDeErro/MensagemDeErro";
import { UserService } from "../../assets/API/use-cases/usuarios/UserSerivice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const userService = new UserService(setResponse, setError);
  const navigate = useNavigate();

  const Login = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    await userService.login(email, password);
    setIsLoading(false);  
  }

  useEffect(() => {
  }, [response, error]);

  if (error) return <MensagemDeErro error={error.response?.data.mensagem} mensagemBotao="Voltar" setError={setError}/>

  if(isLoading){
    return <Loading/>
  } 

  if (response?.status === 200){
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("nome", response.data.usuario.nome);
    navigate("/sistema/home");
  }  
    
  return (
    <>
      <LoginMain>
        <Navigation />
        <h1>Sistema de Monitoramento de Solo</h1>

        <form type="submit">
          <label htmlFor="">Usuário</label>

          <input
            type="text"
            placeholder="Digite o seu e-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label htmlFor="">Senha</label>

          <input
            type="password"
            placeholder="Digite a sua senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={Login}>Login</button>
          <div className="sugestaoCadastro">
            <p>Não tem cadastro?</p>
            <Link to="/cadastro" className="crieSuaConta">Crie sua conta</Link>
          </div>
        </form>
      </LoginMain>
      <Footer />
    </>
  );
};

export default Login;

//https://www.youtube.com/watch?v=LI0YcHMu9P4
