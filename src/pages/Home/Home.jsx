import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
import manjericao from "../../assets/img/manjericao.png"
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        <HomeStyle>
            <Navigation/>
            <h1>Sistema de Monitoramento do Solo</h1>
            <div className="IntroducaoContent">
                <div className="introducao">
                    <img src={manjericao} alt="" className="manjericao" />
                    <p className="introducaoTexto">O projeto Sistema de Monitoramento do Solo está em desenvolvimento, com conclusão prevista para o 2° Semestres de 2024<br/><br/>O projeto é de nível Trabalho de Conclusão de Curso (TCC) e está integrado ao curso de Engenharia da Computação pela Universidade Santa Cecília.</p>
                </div>
                <Link to="/aplicacao" className="saibaMais">Saiba mais</Link>            
            </div>
        </HomeStyle>
        <Footer/>
        </>
    )
}