import { PlantaStyle } from "./PlantaStyle";
import manjericao from "../../assets/img/manjericao2.png";
import plantagenerica from "../../assets/img/plantagenerica.png";

  const formatoDateBR = (inputDateString) => {
  const date = new Date(inputDateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedString = `${day}/${month}/${year}`;

  return formattedString;
};

export const Planta = ({ planta }) => {
  return (
    <PlantaStyle>
      <h2 className="nomeDaPlanta">{planta?.nome}</h2>
      <div className="Planta">
        {planta?.especie === "Manjericão" && (
          <img src={manjericao} className="imagemPlanta"></img>
        )}
        {planta?.especie != "Manjericão" && (
          <img src={plantagenerica} className="imagemPlanta"></img>
        )}
        <div className="infoPlanta">
          <h3>Informações da Planta</h3>
          <p>
            <strong>Espécie: </strong>
            {planta?.especie}
          </p>
          <p>
            <strong>Data da plantação: </strong>
            {formatoDateBR(planta?.dataDaPlantacao)}
          </p>
          <button className="buttonDetalhes">Ver detalhes</button>
        </div>
      </div>
    </PlantaStyle>
  );
};
