import styled from 'styled-components';

// Contêiner principal que envolve o Select
export const SelectContainer = styled.div<{ disabled: boolean; height?: string; width?: string }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: ${({ height }) => (height ? height : '35px')};
  width: ${({ width }) => (width ? width : '100%')};
  position: relative;
  user-select: none;
  background-color: ${({ disabled }) => (disabled ? '#e0e0e0' : 'var(--button-primary)')};
  border: 1px solid var(--border-primary);
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

// Estilização para o placeholder ou valor selecionado
export const Placeholder = styled.div<{ disabled: boolean }>`
  padding: 10px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  background-color: transparent;
`;

// Estilização da seção direita (X, |, e a seta)
export const RightSection = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  width: 10%;
  height: 100%;
  border-left: solid 1px var(--border-primary);
  cursor: pointer;
  &:hover {
    svg {
      color: var(--light-green);
    }
  }
`;

// Estilização para o botão de reset (X)
export const ResetButton = styled.span`
  position: relative;
  right: 10px;
  cursor: pointer;
  color: #999;
  &:hover {
    color: #333;
  }
`;

// Estilização do dropdown onde as opções serão exibidas
export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  background-color: var(--bg-primary);
  border: 1px solid var(--border-primary);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
`;

// Estilização de cada opção do dropdown
export const OptionStyled = styled.div<{ isSelected: boolean }>`
  color: var(--text-primary);
  padding: 10px;
  background-color: ${({ isSelected }) => (isSelected ? 'var(--light-gray)' : 'var(--button-primary)')};
  cursor: pointer;

  &:hover {
    background-color: var(--super-light-gray);
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  width: fit-content;
  justify-content: right;
`;
