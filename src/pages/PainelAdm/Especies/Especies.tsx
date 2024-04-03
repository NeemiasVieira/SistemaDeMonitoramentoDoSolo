import React, { useEffect, useState } from "react";
import { EspeciesStyle } from "./EspeciesStyle";
import { Footer } from "../../../components/Footer/Footer";
import { Navigation } from "../../../components/Navigation/Navigation";
import { useGetAllSpecies } from "../../../services/API/Species/useGetAllSpecies";
import { Especie } from "../../../components/Especie/Especie";
import { Loading } from "../../../components/Loading/Loading";
import { faCircleLeft, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpecieUCModal } from "../../../components/PopUps/Create-Update/SpecieUCModal/SpecieUCModal";
import { Specie } from "../../../components/Especie/Types";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { useDeleteSpecie } from "../../../services/API/Species/useDeleteSpecie";
import { Link } from "react-router-dom";

const Especies = () => {
  const auth = localStorage.getItem("token") ? true : false;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState<string>("Create");
  const [especieEscolhidaParaAtualizacao, setEspecieEscolhidaParaAtualizacao] = useState<Specie>();
  const [deleteSpecieID, setDeleteSpecieID] = useState<string>("");

  const { confirmDeleteSpecie, deleteSpecieError, deleteSpecieIsLoading } = useDeleteSpecie(deleteSpecieID);
  const { notificar }= useNotificacoes();

  useEffect(() => {
    if(deleteSpecieError) {
      notificar({tipo: "ERRO", mensagem: deleteSpecieError, tempoEmSeg: 4});
    }
  }, [deleteSpecieError])

  const openModalUpdate = () => {
    setType("Update")
    setIsModalOpen(true);
  };

  const openModalCreate = () => {
    setType("Create")
    setEspecieEscolhidaParaAtualizacao(null);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setDeleteSpecieID(id)
    notificar({tipo: "NOTIFICACAO", mensagem: "Solicitação de exclusão realizada com sucesso!"})
  } 

  useEffect(() => {
    if(deleteSpecieID.length > 10) confirmDeleteSpecie();
  }, [deleteSpecieID])

  const { allSpeciesData, allSpeciesError, allSpeciesIsLoading, refetchAllSpecies } = useGetAllSpecies();

  return (
    <>
      <EspeciesStyle>
        <Navigation auth={auth} />
        <Link to="/adm/painel" className="buttonVoltar"><FontAwesomeIcon icon={faCircleLeft} /><span>Voltar</span></Link>
        
        <h2 className="tituloDaPagina">Todas as Espécies ativas</h2>
        <button className="createSpecieButton" onClick={openModalCreate}>
          <FontAwesomeIcon icon={faSquarePlus} /> Nova Espécie
        </button>

        <div className="especies">
          {allSpeciesData && allSpeciesData.map((especie) => (
            <Especie
              especie={especie}
              key={especie.id}
              openModalUpdate={openModalUpdate}
              setEspecieEscolhidaParaAtualizacao={setEspecieEscolhidaParaAtualizacao}
              confirmDeleteSpecie={() => handleDelete(especie.id)} // Passando diretamente o id
            />
          ))}
          {allSpeciesIsLoading && <Loading minHeight={"50vh"}/>}
        </div>

        <SpecieUCModal type={type} closeModal={closeModal} isModalOpen={isModalOpen} especie={especieEscolhidaParaAtualizacao} />
      </EspeciesStyle>
      <Footer />
    </>
  );
};
export default Especies;
