import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import { HomePrivateMain } from "./HomePrivateStyle";
import { PlantsService } from "../../../assets/API/use-cases/usuarios/PlantsService";
import { Planta } from "../../../components/Planta/Planta";

const HomePrivate = () => {
  const [response, setResponse] = useState();
  const [plants, setPlants] = useState([]);
  const plantsService = new PlantsService(setResponse);
  const ownerID = localStorage.getItem("userID");
  const token = localStorage.getItem("token");

  useEffect(() => {
    plantsService.getPlantsByOwnerID(ownerID);
  }, [ownerID]);

  useEffect(() => {
    if (response?.data) {
      setPlants(response.data);
    }
  }, [response]);

  if (token) {
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

  return (
    <>
      <p>Você não está mais logado</p>
      <Link to="/login">Logar</Link>
    </>
  );
};

export default HomePrivate;
