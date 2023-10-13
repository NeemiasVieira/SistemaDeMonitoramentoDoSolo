import React, {useState, useEffect} from "react";
import { MinhaPlantaMain } from "./MinhaPlantaStyle";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import GraficoBarras from "../../../components/GraficoBarras/GraficoBarras";
import GraficoLinhas from "../../../components/GraficoLinhas/GraficoLinhas";
import { PlantsService } from "../../../assets/API/use-cases/usuarios/PlantsService";
import { RelatorioDeSaude } from "../../../components/RelatorioDeSaude/RelatorioDeSaude";

const MinhaPlanta = () => {

  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [responseRelatorio, setResponseRelatorio] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [plants, setPlants] = useState([]);
  const [plantaSelecionada, setPlantaSelecionada] = useState();
  const plantsService = new PlantsService(setResponse, setError);
  const relatorioService = new PlantsService(setResponseRelatorio, setError);
  const ownerID = localStorage.getItem("userID");

  useEffect(() => {
    if(error) console.log(error);
  }, [error])

  useEffect(() => {
    plantsService.getPlantsByOwnerID(ownerID);
  },[])

  useEffect(() => {
    if(plantaSelecionada){
      relatorioService.getRelatorioDeSaude(plantaSelecionada);
    }      
  }, [plantaSelecionada])

  useEffect(() => {
    if(response){
      let auxplants = [];
      response?.data.forEach((planta) => auxplants.push(planta));
      setPlants(auxplants);
    }    
  },[response])

  return (
    <>
    <MinhaPlantaMain>
      <NavAutenticada/>
      <h1>Painel de Controle</h1>
      <select value={plantaSelecionada} onChange={(e) => {
        if(e.target.value)
        setPlantaSelecionada(e.target.value);
        }}>
        <option value={null}>Selecione uma planta</option>
        {plants.length > 0 && plants.map((planta) => (<option key={planta?.id} id={planta?.id} value = {planta?.id}>{planta?.nome} - ({planta?.especie})</option>))}
      </select>
      <br/>
      <br/>
      <br/>
      {plantaSelecionada && <RelatorioDeSaude relatorio={responseRelatorio?.data}/>}       
      <br/>
      <br/>
      <br/>
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