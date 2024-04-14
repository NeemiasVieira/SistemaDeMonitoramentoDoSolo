import React from "react";
import { PlantaStyle } from "./PlantaStyle";
import { IPlanta } from "../../interfaces/PlantsModule/planta.interface";
import { useNavigate } from "react-router-dom";
import { FormatarDatas } from "../../assets/utils/FormatDate";
import manjericao from "../../assets/img/manjericao2.png";
import plantagenerica from "../../assets/img/plantagenerica.png";

interface PlantaProps {
  planta: IPlanta;
}

export const Planta: React.FC<PlantaProps> = ({ planta }) => {
  const navigate = useNavigate();

  const navegarParaControle = (idPlanta: string) => {
    navigate(`/painel/plantas/${idPlanta}`);
  };

  return (
    <PlantaStyle>
      <h2 className="nomeDaPlanta">{planta?.nome}</h2>
      <div className="Planta">
        {planta?.especie === "Manjericão" && (
          <img src={manjericao} className="imagemPlanta" alt="Imagem representativa do Manjericão"></img>
        )}
        {planta?.especie !== "Manjericão" && (
          <img
            src={plantagenerica}
            className="imagemPlanta"
            alt="Imagem representativa de uma planta genérica"
          ></img>
        )}
        <div className="infoPlanta">
          <h3>Informações da Planta</h3>
          <p>
            <strong>Espécie: </strong>
            {planta?.especie}
          </p>
          <p>
            <strong>Data da plantação: </strong>
            {FormatarDatas.diaMesAno(planta?.dataDaPlantacao)}
          </p>
          <button className="buttonDetalhes" onClick={() => navegarParaControle(planta.id)}>
            Monitorar
          </button>
        </div>
      </div>
    </PlantaStyle>
  );
};
