import { Tooltip } from '@components/Buttons/ToolTip';
import { TagSimuladoStyle } from './TagSimuladoStyle';

interface TagSimuladoProps {
  simulado: boolean;
}

export const TagSimulado: React.FC<TagSimuladoProps> = ({ simulado }) => {
  return (
    <TagSimuladoStyle $simulado={simulado}>
      {simulado ? 'Simulado' : 'Não Simulado'}
      <Tooltip
        texts={[
          simulado
            ? 'Esse registro é simulado, fica disponível apenas ao ativar o modo simulação e não interage com outros registros reais.'
            : 'Esse é um registro real, estará sempre disponível e não interage com outros registros simulados.',
        ]}
        color="var(--white)"
      />
    </TagSimuladoStyle>
  );
};
