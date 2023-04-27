import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Footer } from "../../components/Footer/Footer";
import { HomeStyle } from "./HomeStyle";
import manjericao from "../../assets/img/manjericao.png"

export default function Home(){
    return(
        <HomeStyle>
            <Navigation/>
            <h1>Sistema de Monitoramento do Solo</h1>
            <div className="introducao">
                <img src={manjericao} alt="" className="manjericao" />
                <p className="introducaoTexto">O projeto Sistema de Monitoramento do Solo tem foco no desenvolvimento do manjericão, com o objetivo de monitorar os nutrientes da planta para melhores cuidados. <br></br><br></br>Monitoramentos: <br></br><br></br>Nitrogênio, Fosfóro, Potássio, umidade, temperatura e pH</p>
            </div>

            <Footer/>
        </HomeStyle>
    )
}