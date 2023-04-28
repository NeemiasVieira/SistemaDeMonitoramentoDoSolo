import React from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import GraficoBarras from "../../../components/GraficoBarras/GraficoBarras";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";

const MinhaPlanta = () => {
  return (
    <>
    <MinhaPlantaMain>
      <NavAutenticada/>
      <h1>Painel de Controle</h1>
      <div className="DadosAtuais">
        <GraficoBarras/>
        <div className="DivTempUmidPH">
          <h3>Outras informações</h3>
          <h4>Dados Atuais</h4>
          <div className="dados">
            <p>Temperatura: 23°C </p>
            <p>Umidade: 60%</p>
            <p>pH: 7</p>
          </div>
          <p className="UltimaAtualizacao">Hoje - Atualizado há 5 minutos.</p>
        </div>
      </div>
      <GraficoLinhas className="GraficoLinhas"/>
    </MinhaPlantaMain>
    <Footer/>
    </>
  )
}

export default MinhaPlanta;