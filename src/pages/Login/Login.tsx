import { Loading } from "@components/Loading/Loading";
import { faAt, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLogin } from "@services/API/Users/useLogin";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LoginMain } from "./LoginStyle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, confirmLogin } = useLogin(email, password);

  const login = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    confirmLogin();
  };

  return (
    <LoginMain>
      <h2>Login</h2>

      {isLoading && <Loading minHeight={"400px"} />}
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
          <button onClick={login} className="botaofazerLogin">
            Login
          </button>
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
