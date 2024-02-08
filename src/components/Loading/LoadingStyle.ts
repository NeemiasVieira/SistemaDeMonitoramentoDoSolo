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

  .icone {
    font-size: 6rem;
    padding: 0;
    margin: 0;
    height: 100px;
  }
`;
