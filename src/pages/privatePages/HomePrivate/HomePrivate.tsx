import React, { useEffect, useState } from "react";
import { Navigation } from "../../../components/Navigation/Navigation";
import { Footer } from "../../../components/Footer/Footer";
import { HomePrivateMain } from "./HomePrivateStyle";
import { PlantsService } from "../../../services/API/PlantsService";
import { Planta } from "../../../components/Planta/Planta";
import { Loading } from "../../../components/Loading/Loading";

interface Plant {
  id: string;
  nome: string;
  especie: string;
  dataDaPlantacao: string; 
}

const HomePrivate = () => {
  const [response, setResponse] = useState<Plant[]>();
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const plantsService = new PlantsService(setResponse, setError);
  const ownerID = localStorage.getItem("userID");
  const [mensagemSucessoLogin, setMensagemSucessoLogin] = useState<string>(`Bem vindo ${localStorage.getItem("nome")}`)
  let sucessoLogin = localStorage.getItem("sucessoLogin");

  const getPlantas = async() => {
    setIsLoading(true);
    await plantsService.getPlantsByOwnerID(ownerID);
    setIsLoading(false);
  }

  useEffect(() => {
    getPlantas();
    setTimeout(() => {
      if(sucessoLogin) {
        localStorage.removeItem("sucessoLogin");
        sucessoLogin = null;
      }}, 500)
  }, [ownerID]);

  useEffect(() => {
    if (response?.length > 0) {
      setPlants(response);
    }
  }, [response, error]);

  if(isLoading) return (    
      <>
      <HomePrivateMain>
          <Navigation auth={true} />
          <main>
            <h1>Seja bem vindo ao Sistema de Controle</h1>
            <h2>
              Por aqui você pode cuidar da sua plantinha, reportar problemas e
              aproveitar o uso da nossa aplicação
            </h2>
            <Loading minHeight="70vh"/>
          </main>
        </HomePrivateMain>
        <Footer />
        </>
  )
  
    return (
      <>
        <HomePrivateMain>
          <Navigation auth={true} />
          <main>
            <h1>Seja bem vindo ao Sistema de Controle</h1> 
            <h2>
              Por aqui você pode cuidar da sua plantinha, reportar problemas e
              aproveitar o uso da nossa aplicação
            </h2>
            <section className="Plantas">
              {plants.length > 0 && <h2 className="suasPlantas">Suas plantas</h2>}
              {!plants || plants.length === 0 && (<><h2>Suas plantas ficarão aqui</h2><p>Contate o suporte para cadastrar sua plantinha.</p></>)}
              <div className="divPlantas">
                {plants.length > 0 &&
                  plants.map((planta) => (
                    <Planta key={planta.id} planta={planta} />
                  ))}
              </div>
            </section>
          </main>
        </HomePrivateMain>
        <Footer />
      </>
    );
  }

export default HomePrivate;
