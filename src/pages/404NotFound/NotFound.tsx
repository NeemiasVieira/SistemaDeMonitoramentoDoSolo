import React from "react";
import { NotFoundStyle } from "./NotFoundStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return(
    <NotFoundStyle>
      <FontAwesomeIcon icon={faTriangleExclamation}  />
      <h1>404</h1>
      <span>Página não encontrada</span>
    </NotFoundStyle>
  )
}

export default NotFound;