import styled from 'styled-components';

export const TagSimuladoStyle = styled.span<{ $simulado: boolean }>`
  display: flex;
  align-items: center;
  gap: 2px;
  background-color: ${({ $simulado }) => ($simulado ? 'var(--bg-dark-blue)' : 'var(--force-dark-green)')};
  color: var(--white);
  padding: 5px 10px;
  border-radius: 10px;
  margin: 0;
  font-weight: 700;
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
`;
