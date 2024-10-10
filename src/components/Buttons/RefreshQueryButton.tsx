import React from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const BotaoAtualizarStyle = styled.div`
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  svg {
    font-size: 1.2rem;
    color: var(--text-secondary);
  }
`;

interface RefreshQueryButtonProps {
  queryKeys: string[];
  className?: string;
}

export const RefreshQueryButton: React.FC<RefreshQueryButtonProps> = ({ queryKeys, className }) => {
  const queryClient = useQueryClient();

  const onClick = () => {
    queryKeys.forEach((key) => {
      queryClient.invalidateQueries(key);
    });
  };

  return (
    <BotaoAtualizarStyle className={className}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </BotaoAtualizarStyle>
  );
};
