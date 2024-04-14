import React, { useState, useEffect } from "react";
import { LoginMain } from "./LoginStyle";
import { Link, useNavigate } from "react-router-dom";
import { Loading } from "../../components/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useLogin } from "../../services/API/Users/useLogin";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { useApplication } from "../../contexts/ApplicationContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { notificar } = useNotificacoes();
  const { setAuth, setIsAdmin } = useApplication();
  
  let { loginResponse, error, isLoading, refetch } = useLogin(email, password);

  const notificarErro = () => notificar({ tipo: "ERRO", mensagem: error, tempoEmSeg: 3 });

  const login = async (e: any) => {
    e.preventDefault();
    await refetch();
    if(error) notificarErro();
  };

  useEffect(() => {
    if (error) notificarErro();

    if (loginResponse?.token) {
      localStorage.setItem("token", loginResponse.token);
      localStorage.setItem("nome", loginResponse.usuario.nome);
      localStorage.setItem("userID", loginResponse.usuario.id);
      localStorage.setItem("sucessoLogin", "true");
      localStorage.setItem("profile", loginResponse.usuario.profile);
      setIsAdmin(loginResponse.usuario.profile === "admin" ? true : false);
      setAuth(true);
      notificar({
        tipo: "SUCESSO",
        mensagem: `Bem vindo ${loginResponse.usuario.nome}`,
        tempoEmSeg: 4
      });
      const redirectToUrl = sessionStorage.getItem("redirectUrl");
      sessionStorage.removeItem("redirectUrl");
      navigate(redirectToUrl ?? "/painel");
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginResponse, error]);

  return (
      <LoginMain>
        <h2>Login</h2>

        {isLoading && <Loading minHeight={'400px'} />}
        {!isLoading && (
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
            <button onClick={login} className="botaofazerLogin">Login</button>
            <div className="sugestaoCadastro">
              <p>Não tem cadastro?</p>
              <Link to="/cadastro" className="crieSuaConta">
                Crie sua conta
              </Link>
            </div>
          </form>
        )}
      </LoginMain>
  );
};

export default Login;
