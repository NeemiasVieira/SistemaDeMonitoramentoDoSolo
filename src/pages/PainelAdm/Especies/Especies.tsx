import React, { useEffect } from "react";
import { EspeciesStyle } from "./EspeciesStyle";
import { Footer } from "../../../components/Footer/Footer";
import { Navigation } from "../../../components/Navigation/Navigation";
import { useGetAllSpecies } from "../../../services/API/Species/useGetAllSpecies";

const Especies = () => {
  const auth = localStorage.getItem("token") ? true : false;
  const { allSpeciesData } = useGetAllSpecies();


  // const parametros = {
  //   nitrogenio: { min: "0.1", max: "0.5" },
  //   fosforo: { min: "0.2", max: "0.6" },
  //   potassio: { min: "0.3", max: "0.7" },
  //   luz: { min: "100", max: "1000" },
  //   umidade: { min: "50", max: "80" },
  //   temperatura: { min: "20", max: "30" },
  //   pH: { min: "6", max: "7" }
  // };
  
  // const objTeste = {
  //   nome: "Nome da Espécie",
  //   descricao: "Descrição da Espécie",
  //   parametros: parametros
  // };

  return (
    <>
      <EspeciesStyle>
        <Navigation auth={auth} />
      </EspeciesStyle>
      <Footer />
    </>
  );
};
export default Especies;
