import React from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

const BotaoAtualizarStyle = styled.div`

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  svg{
    font-size: 1.2rem;;
    color: var(--text-secondary)
  }
`

interface BotaoAtualizarProps{
  isLoading: boolean;
  queryKeys: string[];
}

export const BotaoAtualizar: React.FC<BotaoAtualizarProps> = ({ queryKeys, isLoading }) => {

  const queryClient = useQueryClient();

  const onClick = () => {
    queryKeys.forEach((key) => {
      queryClient.invalidateQueries(key);
    });
  }

  return (
    <BotaoAtualizarStyle>
      <button onClick={onClick}><FontAwesomeIcon icon={faRotate} spin={isLoading}/></button>
    </BotaoAtualizarStyle>
  )
}