import styled from "styled-components";
import React, { useMemo } from "react";
import { IndexModal } from "../IndexModal/IndexModal";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column, useTable } from "react-table";
import { Specie } from "../../Especie/Types";
import { useIsMobile } from "@services/hooks/useIsMobile";

export const formatarNumeroComPontos = (numero: string): string => {
  const regex = /(\d)(?=(\d{3})+(?!\d))/g;
  const numeroFormatado = numero.replace(regex, "$1.");
  return numeroFormatado;
};

const ButtonOpenModal = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: solid var(--border-primary) 1px;
  color: var(--text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  letter-spacing: 1px;
  background-color: var(--contrast);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.1rem;

  @media screen and (max-width: 480px) {
    span {
      font-size: 0.9rem;
      letter-spacing: normal;
    }
  }
`;

interface BotaoOpenModalProps {
  onClick: () => void;
}
const BotaoOpenModal: React.FC<BotaoOpenModalProps> = ({ onClick }) => {
  return (
    <ButtonOpenModal onClick={onClick}>
      <FontAwesomeIcon icon={faCircleQuestion} />
      <span>Saiba mais sobre as faixas saudáveis</span>
    </ButtonOpenModal>
  );
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: solid var(--border-secondary) 1px;

  @media screen and (max-width: 480px) {
    width: 80%;
  }
`;

const StyledHeaderCell = styled.th`
  border-bottom: 1px solid var(--border-secondary);
  background-color: var(--contrast);
  color: var(--text-primary);
  font-weight: bold;
  padding: 10px;
  width: 150px;

  @media screen and (max-width: 480px) {
    width: 55px;
    padding: 5px;
  }
`;

const StyledBodyCell = styled.td`
  text-align: center;
  padding: 5px;
  border-right: 1px solid var(--border-secondary);
  border-bottom: solid 1px var(--border-secondary);
  background-color: var(--contrast);
`;

interface SaudeParamsModalProps {
  especie: Specie;
}

export const SaudeParamsModal: React.FC<SaudeParamsModalProps> = ({ especie }) => {
  const { nitrogenio, fosforo, potassio, luz, umidade, temperatura, pH } = especie.parametros;
  const isMobile = useIsMobile();

  const data = useMemo(
    () => [
      { propriedade: "Nitrogênio", unidade: "mg/Kg", valorMinimo: nitrogenio?.min, valorMaximo: nitrogenio?.max },
      { propriedade: "Fósforo", unidade: "mg/Kg", valorMinimo: fosforo?.min, valorMaximo: fosforo?.max },
      { propriedade: "Potássio", unidade: "mg/Kg", valorMinimo: potassio?.min, valorMaximo: potassio?.max },
      {
        propriedade: "Luz",
        unidade: "lx (lux)",
        valorMinimo: formatarNumeroComPontos(luz?.min),
        valorMaximo: formatarNumeroComPontos(luz?.max),
      },
      { propriedade: "Umidade", unidade: "%", valorMinimo: umidade?.min, valorMaximo: umidade?.max },
      { propriedade: "Temperatura", unidade: "ºC", valorMinimo: temperatura?.min, valorMaximo: temperatura?.max },
      { propriedade: "pH", unidade: "", valorMinimo: pH?.min, valorMaximo: pH?.max },
    ], // eslint-disable-next-line
    [especie]
  );

  const columns: Column<{ propriedade: string; valorMinimo: string; valorMaximo: string; unidade: string }>[] = useMemo(
    () => [
      { Header: "Propriedade", accessor: "propriedade" },
      { Header: "Valor Mínimo", accessor: "valorMinimo" },
      { Header: "Valor Máximo", accessor: "valorMaximo" },
      { Header: "Unidade", accessor: "unidade" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <IndexModal
      botaoOpenModal={BotaoOpenModal}
      height="340px"
      width={isMobile ? "330px" : "600px"}
      paddingContent="20px"
      title="Faixas saudáveis"
      icon={faCircleQuestion}
    >
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <StyledHeaderCell {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </StyledHeaderCell>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <StyledBodyCell {...cell.getCellProps()} key={cell.value}>
                    {cell.render("Cell")}
                  </StyledBodyCell>
                ))}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </IndexModal>
  );
};
