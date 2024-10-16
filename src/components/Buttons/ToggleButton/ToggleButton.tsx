import { ToggleButtonStyle } from './ToggleButtonStyle';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const ToggleButton: React.FC<Props> = ({ onChange, checked }) => {
  return (
    <ToggleButtonStyle>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <span className="slider round"></span>
    </ToggleButtonStyle>
  );
};
