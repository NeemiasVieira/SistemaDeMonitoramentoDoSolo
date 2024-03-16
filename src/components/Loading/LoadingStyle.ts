import styled from "styled-components";

interface LoadingStyleProps {
  minHeight?: any;
}

export const LoadingStyle = styled.div<LoadingStyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.minHeight ? props.minHeight : '100vh')};
  min-width: 100vw;

  svg{
    font-size: 5px;
    max-width: 60px;
  }
`;
