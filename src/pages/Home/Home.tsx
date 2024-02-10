import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";
import manjericao2 from "../../assets/img/Manjericao2.jpg";

export default function Home() {
  return (
    <>
      <HomeStyle>
        <Navigation />
        <div className="IntroducaoContent">
          <img src={manjericao2} alt="Manjericão" />
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