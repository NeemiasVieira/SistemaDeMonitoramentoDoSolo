import styled from "styled-components";
import React, { useMemo } from "react";
import { IndexModal } from "../IndexModal/IndexModal"
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SaudeParamsModalStyle } from "./SaudeParamsModalStyle";
import { Column, useTable } from "react-table";
import { Specie } from "../../Especie/Types";

const ButtonOpenModal = styled.button`
    background-color: transparent;
    cursor: pointer;
    border: solid var(--gray-primary) 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px; 
    letter-spacing: 1px;
    background-color: var(--white);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.1rem;

    @media screen and (max-width: 480px) {
      span{
        font-size: .9rem;
        letter-spacing: normal;
      }
    }

`

interface BotaoOpenModalProps{
  onClick: () => void;
}
const BotaoOpenModal: React.FC<BotaoOpenModalProps> = ({ onClick }) => {
  return(
    <ButtonOpenModal onClick={onClick}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <span>Saiba mais sobre as faixas saudáveis</span>
    </ButtonOpenModal>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: solid #111 1px;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const StyledHeaderCell = styled.th`
  border-bottom: 1px solid #111;
  background-color: #fff;
  color: black;
  font-weight: bold;
  padding: 10px;
  width: 150px;

  @media screen and (max-width: 480px){
    width: 55px;
    padding: 5px;
  }
`;

const StyledBodyCell = styled.td`
  text-align: center;
  padding: 5px;
  border-right: 1px solid black;
  border-bottom: solid 1px #111;
  background-color: #fff;

`;

interface SaudeParamsModalProps{
  especie: Specie;
}

export const SaudeParamsModal: React.FC<SaudeParamsModalProps> = ({ especie }) => {

  const { nitrogenio, fosforo, potassio, luz, umidade, temperatura, pH } = especie?.parametros;

  const data = useMemo(
    () => [
      { propriedade: "Nitrogênio", unidade: "mg/Kg", valorMinimo: nitrogenio?.min, valorMaximo: nitrogenio?.max },
      { propriedade: "Fósforo", unidade: "mg/Kg", valorMinimo: fosforo?.min, valorMaximo: fosforo?.max },
      { propriedade: "Potássio", unidade: "mg/Kg", valorMinimo: potassio?.min, valorMaximo: potassio?.max },
      { propriedade: "Luz", unidade: "%", valorMinimo: luz?.min, valorMaximo: luz?.max },
      { propriedade: "Umidade", unidade: "%", valorMinimo: umidade?.min, valorMaximo: umidade?.max },
      { propriedade: "Temperatura", unidade: "ºC", valorMinimo: temperatura?.min, valorMaximo: temperatura?.max },
      { propriedade: "pH", unidade: "", valorMinimo: pH?.min, valorMaximo: pH?.max },
    ],
    [especie]
  );

  const columns: Column<{ propriedade: string; unidade: string, valorMinimo: string; valorMaximo: string; }>[] = useMemo(
    () => [
      { Header: "Propriedade", accessor: "propriedade" },
      { Header: "Unidade", accessor: "unidade" },
      { Header: "Valor Mínimo", accessor: "valorMinimo" },
      { Header: "Valor Máximo", accessor: "valorMaximo" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return(
    <IndexModal botaoOpenModal={BotaoOpenModal} height="43vh" width="80vw" minHeight="35vh" minWidth="35vw" maxHeight="500px" maxWidth="600px">
    <SaudeParamsModalStyle>
      <h2>Faixas saudáveis </h2>
      <StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <StyledHeaderCell {...column.getHeaderProps()}>{column.render("Header")}</StyledHeaderCell>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <StyledBodyCell {...cell.getCellProps()}>{cell.render("Cell")}</StyledBodyCell>
              ))}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
    </SaudeParamsModalStyle>
  </IndexModal>
  )

}