import styled from "styled-components";
interface LoadingProps {
  $minheight?: string;
  $logowidth?: string;
  $logoheight?: string;
  $fullwidth?: boolean;
}

export const LoadingStyle = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.$minheight ? props.$minheight : "0")};
  min-width: ${(props) => (props.$fullwidth ? "100%" : 0)};
  width: ${(props) => (props.$logowidth ? props.$logowidth : "50px")};
  height: ${(props) => (props.$logoheight ? props.$logoheight : "50px")};
  overflow-x: hidden;

  svg {
    font-size: 5px;
    max-width: 60px;
  }
`;
