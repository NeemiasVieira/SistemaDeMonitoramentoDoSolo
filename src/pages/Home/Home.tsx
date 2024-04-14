import React from "react";
import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { numeroAleatorioNoIntervalo } from "../../assets/utils/NumeroAleatorio";
import homeImage from "../../assets/img/homeImage1.jpg"
import homeImage2 from "../../assets/img/homeImage2.jpg"
import homeImage3 from "../../assets/img/homeImage3.jpg"
import homeImage4 from "../../assets/img/homeImage4.jpg"

const ImagemAleatoria = () => {
  const numero = numeroAleatorioNoIntervalo(1, 4);
  switch(numero){
    case 1:
      return homeImage;
    case 2:
      return homeImage2
    case 3: 
      return homeImage3
    case 4: 
      return homeImage4
  }
}

export default function Home() {

  return (
      <HomeStyle>
        <div className="IntroducaoContent">
          <img src={ImagemAleatoria()} alt="Manjericão" />
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
