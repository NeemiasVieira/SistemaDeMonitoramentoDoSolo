import styled from 'styled-components';

export const SelectContainer = styled.div<{ $disabled: boolean; $height?: string; $width?: string }>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  height: ${({ $height }) => ($height ? $height : '35px')};
  width: ${({ $width }) => ($width ? $width : '100%')};
  position: relative;
  user-select: none;
  background-color: ${({ $disabled }) => ($disabled ? '--disabled-button-bg' : 'var(--button-primary)')};
  border: 1px solid var(--border-primary);
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  pointer-events: ${({ $disabled }) => ($disabled ? 'none' : 'auto')};
`;

export const Placeholder = styled.div<{ $disabled: boolean }>`
  padding: 10px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: transparent;
`;

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

export const ResetButton = styled.span`
  position: relative;
  right: 10px;
  cursor: pointer;
  color: #999;
  &:hover {
    color: #333;
  }
`;

export const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  background-color: var(--bg-primary);
  border: ${({ $isOpen }) => ($isOpen ? '1px solid var(--border-primary)' : 'none')};
  max-height: ${({ $isOpen }) => ($isOpen ? '200px' : '0')};
  overflow-y: ${({ $isOpen }) => ($isOpen ? 'auto' : 'hidden')};
  transition: max-height 0.2s ease-in-out;
  z-index: 1;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #222;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--dark-green);
    border: solid #53af30 1.5px;
    border-radius: 5px;
  }
`;

export const OptionStyled = styled.div<{ $isSelected: boolean }>`
  color: var(--text-primary);
  padding: 10px;
  background-color: ${({ $isSelected }) => ($isSelected ? 'var(--light-gray)' : 'var(--button-primary)')};
  cursor: pointer;
  display: flex;
  flex-flow: column wrap;
  span {
    color: var(--text-secondary);
    font-weight: 200;
    font-size: 0.9rem;
  }

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
