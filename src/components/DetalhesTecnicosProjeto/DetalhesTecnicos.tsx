import { DetalhesTecnicosStyle } from "./DetalhesTecnicosStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useThemes } from "@contexts/ThemeProvider";
import azurelogo from "@assets/img/azurelogo.png";
import mongodblogo from "@assets/img/mongodblogo.svg";
import nodejslogo from "@assets/img/nodejslogo.png";
import typescriptlogo from "@assets/img/typescript.png";
import pythonlogo from "@assets/img/pythonlogo.png";
import raspberrylogo from "@assets/img/raspberrylogo.png";
import mongodblogodark from "@assets/img/mongodblogodark.svg";
import diagramaarq from "@assets/img/diagramaarq.png";

export const DetalhesTecnicosProjeto = () => {
  const { isLightTheme } = useThemes();

  return (
    <DetalhesTecnicosStyle>
      <h2>Detalhes Técnicos do Projeto</h2>
      <div className="divtecnologias">
        <div className="tecnologia">
          <h3>Front-End</h3>
          <FontAwesomeIcon icon={faReact} className="reactlogo" />

          <ul>
            <li>Vite</li>
            <li>React-Query</li>
            <li>Axios</li>
            <li>Styled-Components</li>
            <li>React-Router-Dom</li>
            <li>React-Google-Charts</li>
            <li>React-Modal</li>
            <li>Fortawesome Icons</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Back-End</h3>
          <img src={nodejslogo} className="nodeLogo" alt="Logo NodeJs" />

          <ul>
            <li>NestJs</li>
            <li>JWT</li>
            <li>GraphQL</li>
            <li>Bcrypt</li>
            <li>NestJs</li>
            <li>Prisma</li>
            <li>class-validator</li>
            <li>html-pdf</li>
            <li>rxjs</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Banco de Dados</h3>
          <img src={isLightTheme ? mongodblogo : mongodblogodark} alt="Logo MongoDB" />
          <ul>
            <li>MongoDB</li>
            <li>Cluster</li>
            <li>Documentos</li>
            <li>Coleções</li>
            <li>Alta disponibilidade</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>DevOps</h3>
          <img src={azurelogo} className="azureLogo" alt="Microsoft Azure Logo" />
          <ul>
            <li>Azure</li>
            <li>Máquina Virtual</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>nginx</li>
            <li>Domínio e subdomínio</li>
            <li>Políticas de Segurança</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Desenvolvimento</h3>
          <img src={typescriptlogo} alt="TypeScript Logo" />

          <ul>
            <li>TypeScript</li>
            <li>Figma</li>
            <li>Eslint</li>
            <li>Prettier</li>
            <li>Git</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Machine Learning</h3>
          <img src={pythonlogo} alt="Python Logo" />

          <ul>
            <li>Python</li>
            <li>Flask</li>
            <li>Tensorflow</li>
            <li>API Rest</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Hardware</h3>
          <img src={raspberrylogo} alt="Placa Raspberry PI 4B" />

          <ul>
            <li>Raspberry Pi 4B</li>
            <li>Câmera</li>
            <li>Sensor NPKTHP</li>
            <li>Sensor Luminosidade</li>
            <li>GPIO</li>
            <li>minimalmodbus</li>
            <li>GPIO</li>
            <li>time, schedule</li>
            <li>logging</li>
          </ul>
        </div>
        <div className="tecnologia">
          <h3>Repositórios</h3>
          <FontAwesomeIcon icon={faGithub} />
          <span>Open Source</span>

          <ul>
            <li>
              {" "}
              <a href="https://github.com/NeemiasVieira/SistemaDeMonitoramentoDoSolo" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="link" />
                Sistema - Front
              </a>
            </li>
            <li>
              <a href="https://github.com/NeemiasVieira/sms-api" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="link" />
                SMS-API - Node
              </a>
            </li>
            <li>
              <a href="https://github.com/NeemiasVieira/PythonAPI-IA" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="link" />
                FlaskAPI - Python
              </a>
            </li>
            <li>
              <a href="https://github.com/NeemiasVieira/SensorMonitoramento" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLink} className="link" />
                Código HardWare
              </a>
            </li>
          </ul>
        </div>
      </div>
      <img src={diagramaarq} className="diagramaARQ" />
    </DetalhesTecnicosStyle>
  );
};
