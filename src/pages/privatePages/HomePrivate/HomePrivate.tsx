import React, { useEffect, useState } from "react";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import { HomePrivateMain } from "./HomePrivateStyle";
import { PlantsService } from "../../../services/API/PlantsService";
import { Planta } from "../../../components/Planta/Planta";
import { Loading } from "../../../components/Loading/Loading";
import { MensagemDeErro } from "../../../components/MensagemDeErro/MensagemDeErro";

const HomePrivate = () => {
  const [response, setResponse] = useState<any>();
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState<any>();
  const [isLoading, setIsLoading] = useState(false);
  const plantsService = new PlantsService(setResponse, setError);
  const ownerID = localStorage.getItem("userID");

  const getPlantas = async() => {
    setIsLoading(true);
    await plantsService.getPlantsByOwnerID(ownerID);
    setIsLoading(false);
  }

  useEffect(() => {
    getPlantas();
  }, [ownerID]);

  useEffect(() => {
    if (response?.data) {
      setPlants(response.data);
    }
  }, [response]);

  if(isLoading) return (    
      <>
      <HomePrivateMain>
          <NavAutenticada />
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

  if(error) return <MensagemDeErro  error={error.response?.data.mensagem}  mensagemBotao="Voltar"  setError={setError} /> 
  
    return (
      <>
        <HomePrivateMain>
          <NavAutenticada />
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
