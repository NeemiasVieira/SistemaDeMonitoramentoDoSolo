import { useEffect, useMemo, useState } from "react";
import { EspeciesStyle } from "./EspeciesStyle";
import { useGetAllSpecies } from "@services/API/Species/useGetAllSpecies";
import { Especie } from "@components/Especie/Especie";
import { Loading } from "@components/Loading/Loading";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Specie } from "@components/Especie/Types";
import { useNotificacoes } from "../../../contexts/NotificacoesProvider";
import { useDeleteSpecie } from "@services/API/Species/useDeleteSpecie";
import { BotaoVoltar } from "@components/Buttons/BotaoVoltar";
import { CreateEditEspecie } from "./CreateEdit";

const Especies = () => {
  const [action, setAction] = useState<"Create" | "Update" | null>();
  const [especieEscolhidaParaAtualizacao, setEspecieEscolhidaParaAtualizacao] = useState<Specie>();
  const [deleteSpecieID, setDeleteSpecieID] = useState<string>("");

  const { confirmDeleteSpecie } = useDeleteSpecie(deleteSpecieID);
  const { notificar } = useNotificacoes();

  const openModalUpdate = () => {
    setAction("Update");
  };

  const openModalCreate = () => {
    setAction("Create");
    setEspecieEscolhidaParaAtualizacao(null);
  };

  const showListSpecies = useMemo(() => {
    return !action;
  }, [action]);

  useEffect(() => {}, [especieEscolhidaParaAtualizacao]);

  const handleDelete = (id: string) => {
    setDeleteSpecieID(id);
    notificar({ tipo: "NOTIFICACAO", mensagem: "Solicitação de exclusão concluída com sucesso!" });
  };

  useEffect(() => {
    if (deleteSpecieID.length > 10) confirmDeleteSpecie(); // eslint-disable-next-line
  }, [deleteSpecieID]);

  const { allSpeciesData, allSpeciesIsLoading } = useGetAllSpecies();

  return (
    <>
      {showListSpecies ? (
        <EspeciesStyle>
          <BotaoVoltar path="/adm/painel" />
          <h2 className="tituloDaPagina">Todas as Espécies ativas</h2>
          <button className="createSpecieButton" onClick={openModalCreate}>
            <FontAwesomeIcon icon={faSquarePlus} /> Nova Espécie
          </button>

          <div className="especies">
            {allSpeciesData &&
              allSpeciesData.map((especie) => (
                <Especie
                  especie={especie}
                  key={especie.id}
                  openModalUpdate={openModalUpdate}
                  setEspecieEscolhidaParaAtualizacao={setEspecieEscolhidaParaAtualizacao}
                  confirmDeleteSpecie={() => handleDelete(especie.id)} // Passando diretamente o id
                />
              ))}
            {allSpeciesIsLoading && <Loading minHeight={"50vh"} />}
          </div>
        </EspeciesStyle>
      ) : (
        <CreateEditEspecie action={action} setAction={setAction} especie={especieEscolhidaParaAtualizacao} />
      )}
    </>
  );
};
export default Especies;
