import React, { useMemo, useState } from 'react';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIsMobile } from '@services/hooks/useIsMobile';
import styled from 'styled-components';

const ToolTipStyle = styled.div<{ $color?: string }>`
  position: relative;
  display: inline-block;

  svg {
    color: ${({ $color }) => ($color ? $color : 'var(--text-secondary)')};
    font-size: 1.1rem;
    margin-left: 5px;
    cursor: pointer;
  }
`;

const TooltipText = styled.span<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  width: 20vw;
  min-width: 250px;
  padding: 10px 10px;
  max-width: 300px;
  height: auto;
  max-height: 300px;
  background-color: var(--button-primary);
  color: var(--text-primary);
  font-weight: 500;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  font-size: 0.9rem;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s;
  -webkit-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);
  box-shadow: 2px -1px 25px -6px rgba(0, 0, 0, 0.75);

  @media screen and (width <=480px) {
    width: 50vw;
    min-width: 100px;
  }
`;

interface ToolTipProps {
  texts: string[];
  color?: string;
}

export const Tooltip: React.FC<ToolTipProps> = ({ texts, color }) => {
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState<boolean>(false);
  const [clicked, setCliked] = useState<boolean>(false);

  const showToolTip = useMemo(() => {
    return isMobile ? clicked : visible || clicked;
  }, [visible, clicked, isMobile]);

  return (
    <ToolTipStyle onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} $color={color}>
      <FontAwesomeIcon icon={faInfoCircle} onClick={() => setCliked(!clicked)} />
      <TooltipText $visible={showToolTip}>
        {texts.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
            <br />
          </React.Fragment>
        ))}
      </TooltipText>
    </ToolTipStyle>
  );
};
