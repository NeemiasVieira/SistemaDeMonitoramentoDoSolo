import React, { useState, useEffect } from "react";
import { LoginMain } from "./LoginStyle";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { MensagemDeErro } from "../../components/MensagemDeErro/MensagemDeErro";
import { UserService } from "../../services/API/UserSerivice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState<any>();
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const userService = new UserService(setResponse, setError);
  const navigate = useNavigate();

  const Login = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    await userService.login(email, password);
    setIsLoading(false);
  };

  useEffect(() => {

    if (response?.token) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("nome", response.usuario.nome);
      localStorage.setItem("userID", response.usuario.id);
      navigate("/sistema/home");
    }

  }, [response, error]);

  if (error)
    return (
      <MensagemDeErro
        error={error}
        mensagemBotao="Voltar"
        setError={setError}
      />
    );

  if (isLoading) return <Loading/>

  return (
    <>
      <LoginMain>
        <Navigation />
        <h1>Sistema de Monitoramento de Solo</h1>
        <h2>Login</h2>

        <form>
          <label htmlFor="">Usuário</label>
          <div className="divInput">
            <div className="divIcon">
              <FontAwesomeIcon icon={faAt} />
            </div>
            <input
              type="text"
              placeholder="Digite o seu e-mail"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <label htmlFor="">Senha</label>
          <div className="divInput">
            <div className="divIcon">
              <FontAwesomeIcon icon={faKey} />
            </div>
            <input
              type="password"
              autoComplete="password"
              required
              placeholder="Digite a sua senha"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button onClick={Login}>Login</button>
          <div className="sugestaoCadastro">
            <p>Não tem cadastro?</p>
            <Link to="/cadastro" className="crieSuaConta">
              Crie sua conta
            </Link>
          </div>
        </form>
      </LoginMain>
      <Footer />
    </>
  );
};

export default Login;

//https://www.youtube.com/watch?v=LI0YcHMu9P4
