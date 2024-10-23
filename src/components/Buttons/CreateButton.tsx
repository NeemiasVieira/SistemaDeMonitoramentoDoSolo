import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const CreateButtonStyle = styled.button<{ $disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  gap: 10px;
  color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-color)' : 'var(--white)')};
  border: solid var(--border-primary) 1px;
  width: 200px;
  height: 40px;
  padding: 10px;
  margin: 15px 0;
  border-radius: 7px;
  background-color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-bg)' : 'var(--force-dark-green)')};
  font-weight: 700;
  box-shadow: 5px 0px 8px rgba(0, 0, 0, 0.1);
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 200ms;
  &:hover {
    ${({ $disabled }) => ($disabled ? '' : 'transform: scale(1.1);')}
  }

  svg {
    font-size: 1.2rem;
    color: ${({ $disabled }) => ($disabled ? 'var(--disabled-button-color)' : 'var(--white)')};
  }
`;

interface CreateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onCreate?: () => void;
  disabled?: boolean;
  title?: string;
}

export const CreateButton: React.FC<CreateButtonProps> = ({ onCreate, title, disabled = false, ...props }) => {
  return (
    <CreateButtonStyle $disabled={disabled} onClick={!disabled ? onCreate : () => {}} {...props}>
      <FontAwesomeIcon icon={faSquarePlus} /> {title}
    </CreateButtonStyle>
  );
};
