import React from "react";
import { EspecieStyle } from "./EspecieStyle";
import { EspecieProps } from "./Types";
import { DeleteButton } from "../Buttons/DeleteButton";
import { UpdateButton } from "../Buttons/UpdateButton";
import { useNotificacoes } from "../../contexts/NotificacoesProvider";
import { formatarNumeroComPontos } from "../PopUps/SaudeParamsModal/SaudeParamsModal";

export const Especie: React.FC<EspecieProps> = ({
  especie,
  openModalUpdate,
  setEspecieEscolhidaParaAtualizacao,
  confirmDeleteSpecie,
}) => {
  const { notificar } = useNotificacoes();

  const handleUpdate = () => {
    setEspecieEscolhidaParaAtualizacao(especie);
    openModalUpdate();
  };

  const handleDelete = () => {
    notificar({ tipo: "NOTIFICACAO", mensagem: "Solicitação de exclusão confirmada", tempoEmSeg: 4 });
    confirmDeleteSpecie(especie.id);
  };

  return (
    <EspecieStyle>
      <div className="titleAndButtons">
        <h3>{especie.nome}</h3>
        <div className="buttonActions">
          <UpdateButton openModal={handleUpdate} />
          <DeleteButton onDelete={handleDelete} />
        </div>
      </div>
      <p className="descricao">{especie.descricao}</p>
      <table>
        <thead>
          <tr>
            <th>Parâmetro</th>
            <th>Valor mínimo</th>
            <th>Valor máximo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nitrogênio</td>
            <td>{especie.parametros.nitrogenio.min} mg/Kg</td>
            <td>{especie.parametros.nitrogenio.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Fósforo</td>
            <td>{especie.parametros.fosforo.min} mg/Kg</td>
            <td>{especie.parametros.fosforo.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Potássio</td>
            <td>{especie.parametros.potassio.min} mg/Kg</td>
            <td>{especie.parametros.potassio.max} mg/Kg</td>
          </tr>
          <tr>
            <td>Luz</td>
            <td>{formatarNumeroComPontos(especie.parametros.luz.min)} lx (lux)</td>
            <td>{formatarNumeroComPontos(especie.parametros.luz.max)} lx (lux)</td>
          </tr>
          <tr>
            <td>Umidade</td>
            <td>{especie.parametros.umidade.min} %</td>
            <td>{especie.parametros.umidade.max} %</td>
          </tr>
          <tr>
            <td>Temperatura</td>
            <td>{especie.parametros.temperatura.min} ºC</td>
            <td>{especie.parametros.temperatura.max} ºC</td>
          </tr>
          <tr>
            <td>pH</td>
            <td>{especie.parametros.pH.min}</td>
            <td>{especie.parametros.pH.max}</td>
          </tr>
        </tbody>
      </table>
    </EspecieStyle>
  );
};
