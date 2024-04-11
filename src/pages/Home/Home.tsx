import React from "react";
import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";
import homeImage from "../../assets/img/homeImage4.jpg"
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {

  return (
      <HomeStyle>
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
              <FontAwesomeIcon icon={faLeaf} />
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </HomeStyle>
  );
}
