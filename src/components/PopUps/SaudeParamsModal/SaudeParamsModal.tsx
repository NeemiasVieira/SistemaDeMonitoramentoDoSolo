import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from '@services/hooks/useIsMobile';
import styled from 'styled-components';
import { Specie } from '../../Especie/Types';
import { IndexModal } from '../IndexModal/IndexModal';
import { ParametrosDaEspecie } from '@components/ParametrosDaEspecie/ParametrosDaEspecie';

export const formatarNumeroComPontos = (numero: string): string => {
  const regex = /(\d)(?=(\d{3})+(?!\d))/g;
  const numeroFormatado = numero.replace(regex, '$1.');
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
  background-color: var(--contrast);
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1.1rem;

  @media screen and (max-width: 480px) {
    span {
      font-size: 0.9rem;
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

interface SaudeParamsModalProps {
  especie: Specie;
}

export const SaudeParamsModal: React.FC<SaudeParamsModalProps> = ({ especie }) => {
  const isMobile = useIsMobile();

  return (
    <IndexModal
      botaoOpenModal={BotaoOpenModal}
      height={isMobile ? '370px' : 'auto'}
      width={isMobile ? '90vw' : '600px'}
      paddingContent="20px"
      title="Faixas saudáveis"
      icon={faCircleQuestion}
    >
      <ParametrosDaEspecie especie={especie} />
    </IndexModal>
  );
};
