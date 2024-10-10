import styled from "styled-components";
import { LoadingProps } from "./Loading";

export const LoadingStyle = styled.div<LoadingProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "100vh")};
  min-width: ${(props) => (props.fullWidth ? "100%" : 0)};
  width: ${(props) => (props.logoWidth ? props.logoWidth : "50px")};
  height: ${(props) => (props.logoHeight ? props.logoHeight : "50px")};
  overflow-x: hidden;

  svg {
    font-size: 5px;
    max-width: 60px;
  }
`;
