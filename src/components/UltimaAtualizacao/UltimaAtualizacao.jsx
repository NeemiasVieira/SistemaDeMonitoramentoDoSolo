import { UltimaAtualizacaoStyle } from "./UltimaAtualizacaoStyle";
import { formatRelativeTime } from "../GraficoBarras/GraficoBarras";
import iconeUmidade from "../../assets/img/iconeUmidade.png";
import iconePH from "../../assets/img/iconePH.png";
import iconeTemperatura from "../../assets/img/iconeTemperatura.png";
import GraficoBarras from "../GraficoBarras/GraficoBarras";

export const UltimaAtualizacao = ({ registro }) => {
  return (
    <UltimaAtualizacaoStyle>
      <h1 className="titulo">Última Atualização</h1>
      <div className="DadosAtuais">
        <div className="GraficoDeBarras">
          <h4>Nutrientes da Planta (mg/Kg)</h4>
          <GraficoBarras registro={registro?.data} />
        </div>

        <div className="DivTempUmidPH">
          <h4>Outras Informações</h4>
          <div className="dados">
            {registro?.data && (
              <>
                <p className="dadosTempUmidPH">
                  <img className="icons" src={iconeTemperatura}></img>
                  {`Temperatura: ${registro.data.temperatura}°C`}
                </p>
                <p className="dadosTempUmidPH">
                  <img className="icons" src={iconeUmidade}></img>
                  {`Umidade: ${registro.data.umidade}%`}
                </p>
                <p className="dadosTempUmidPH">
                  <img className="icons" src={iconePH}></img>
                  {`pH: ${registro.data.pH}`}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      {registro?.data && (
        <p className="InfoUltimaAtualizacao">
          {formatRelativeTime(registro.data.dataDeRegistro)}
        </p>
      )}
    </UltimaAtualizacaoStyle>
  );
};
