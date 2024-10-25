import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UnauthorizedStyle } from "./UnauthorizedStyle";

const Unauthorized = () => {
  return (
    <UnauthorizedStyle>
      <FontAwesomeIcon icon={faLock} />
      <h1>401</h1>
      <span>Usuário não autorizado</span>
    </UnauthorizedStyle>
  );
};

export default Unauthorized;
