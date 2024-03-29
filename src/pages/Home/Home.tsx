import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import homeImage from "../../assets/img/homeImage4.jpg"

export default function Home() {

  const auth = localStorage.getItem("token") ? true : false;

  return (
    <>
      <HomeStyle>
        <Navigation auth={auth}/>
        <div className="IntroducaoContent">
          <img src={homeImage} alt="Manjericão" />
          <div className="IntroducaoLadoDireito">
            <h1>Sistema de Monitoramento do Solo</h1>
            <div className="introducao">
              <p className="introducaoTexto">
                O projeto Sistema de Monitoramento do Solo está em
                desenvolvimento, com conclusão prevista para o 2° Semestre de
                2024
                <br />
                <br />O projeto é de nível Trabalho de Conclusão de Curso (TCC)
                e está integrado ao curso de Engenharia da Computação pela
                Universidade Santa Cecília.
              </p>
              <Link to="/aplicacao" className="saibaMais">
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </HomeStyle>
      <Footer />
    </>
  );
}
