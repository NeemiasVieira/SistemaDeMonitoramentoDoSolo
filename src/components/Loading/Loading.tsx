import React from "react";
import { LoadingStyle } from "./LoadingStyle";

interface LoadingProps {
  minHeight?: any;
  logoWidth?: string;
  logoHeight?: string;
}

export const Loading: React.FC<LoadingProps> = ({ minHeight, logoHeight, logoWidth }) => {
  return (
    <LoadingStyle style={{ minHeight: minHeight ?? "1px" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: 'auto', background: 'transparent', display: 'block', shapeRendering: 'auto' }}
        width={logoWidth ?? "200px"}
        height={logoHeight ?? "200px"}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#8CDF27"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="0.8s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </LoadingStyle>
  );
};
