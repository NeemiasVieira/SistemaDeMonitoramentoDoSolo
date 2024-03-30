import styled from "styled-components";
import React, { useMemo } from "react";
import { IndexModal } from "../IndexModal/IndexModal"
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SaudeParamsModalStyle } from "./SaudeParamsModalStyle";
import { Column, useTable } from "react-table";

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
`

interface BotaoOpenModalProps{
  onClick: () => void;
}
const BotaoOpenModal: React.FC<BotaoOpenModalProps> = ({onClick}) => {
  return(
    <ButtonOpenModal onClick={onClick}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      Saiba mais sobre as faixas saudáveis
    </ButtonOpenModal>
  )
}

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: solid #111 1px;
`;

const StyledHeaderCell = styled.th`
  border-bottom: 1px solid #111;
  background-color: #fff;
  color: black;
  font-weight: bold;
  padding: 10px;
  width: 150px;

  @media screen and (max-width: 480px){
    width: 75px;
  }
`;

const StyledBodyCell = styled.td`
  text-align: center;
  padding: 10px;
  border-right: 1px solid black;
  border-bottom: solid 1px #111;
  background-color: #fff;
`;


export const SaudeParamsModal = () => {

  const data = useMemo(
    () => [
      { propriedade: "Nitrogênio", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "Fósforo", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "Potássio", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "Luz", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "Umidade", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "Temperatura", valorMinimo: 0, valorMaximo: 100 },
      { propriedade: "pH", valorMinimo: 0, valorMaximo: 100 },
    ],
    []
  );

  // Definição das colunas
  const columns: Column<{ propriedade: string; valorMinimo: number; valorMaximo: number; }>[] = useMemo(
    () => [
      { Header: "Propriedade", accessor: "propriedade" },
      { Header: "Valor Mínimo", accessor: "valorMinimo" },
      { Header: "Valor Máximo", accessor: "valorMaximo" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return(
    <IndexModal botaoOpenModal={BotaoOpenModal} height="55vh" width="80vw" minHeight="35vh" minWidth="35vw" maxHeight="500px" maxWidth="600px">
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