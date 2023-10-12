import React from "react";
import { Link } from "react-router-dom";
import { NavAutenticada } from "../../../components/NavAutenticada/NavAutenticada";
import { Footer } from "../../../components/Footer/Footer";
import { HomePrivateMain } from "./HomePrivateStyle";



const HomePrivate = () => {
  
  const token = localStorage.getItem("token");
  
  if (token) {
    return (
      <>
        <HomePrivateMain>
          <NavAutenticada/>
            <section>
              <h1>Seja bem vindo ao Sistema de Controle</h1>
              <h2>Por aqui você pode cuidar da sua plantinha, reportar problemas e aproveitar o uso da nossa aplicação</h2>
            </section>          
        </HomePrivateMain>
        <Footer/>
      </>
    );
  }


  return (
    <>
        <p>Você não está mais logado</p>
        <Link to="/login">Logar</Link>
    </>
  )
  

 
};

   


export default HomePrivate;