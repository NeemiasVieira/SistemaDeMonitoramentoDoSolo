import { useNotificacoes } from "@contexts/NotificacoesProvider";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback, useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import styled from "styled-components";

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
  observeVariable?: any;
}

export const RefreshQueryButton: React.FC<RefreshQueryButtonProps> = ({
  queryKeys,
  className,
  observeVariable,
}) => {
  const queryClient = useQueryClient();
  const { notificar } = useNotificacoes();
  const [userRequestUpdate, setUserRequestUpdate] = useState<boolean>(false);

  const notificarSucesso = useCallback(() => {
    if (userRequestUpdate) {
      setUserRequestUpdate(false);
      notificar({
        tipo: "SUCESSO",
        mensagem: "Dados atualizados com sucesso.",
        tempoEmSeg: 3,
      });
    }
  }, [userRequestUpdate, notificar, setUserRequestUpdate]);

  useEffect(() => {
    notificarSucesso();
  }, [observeVariable]);

  const onClick = () => {
    setUserRequestUpdate(true);
    queryKeys.forEach((key) => {
      queryClient.invalidateQueries(key);
    });
    notificar({
      tipo: "NOTIFICACAO",
      mensagem: "Buscando atualizações...",
      tempoEmSeg: 2,
    });
  };

  return (
    <BotaoAtualizarStyle className={className}>
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faRotateRight} spin={userRequestUpdate} />
      </button>
    </BotaoAtualizarStyle>
  );
};
