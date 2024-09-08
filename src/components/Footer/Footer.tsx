import { FooterStyle } from "./FooterStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebook, faInstagram, faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import logoUnisanta from "@assets/img/unisantalogo.png";

export const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <div className="footer-content">
          <div className="Intro">
            <h3>Trabalho de Conclusão de Curso</h3>
            <p>
              Nós somos um grupo de 4 integrantes buscando melhorar a qualidade de crescimento e vida da sua plantinha.
            </p>
            <img src={logoUnisanta} alt="Logo Unisanta"></img>
          </div>

          <div className="footer-section">
            <h3>Integrantes do Grupo</h3>
            <p>
              Neemias Vieira <br /> Luan Carusi <br /> Caio Monteiro <br /> Luis Guilherme
            </p>
          </div>

          <div className="footer-section">
            <h3>Informações de Contato</h3>
            <p>e-mail: nf170550@alunos.unisanta.br</p>
            <p>Telefone: +55 (13) 99602-0483</p>
            <p>Rua Oswaldo Cruz 271, Boqueirão - Santos/SP</p>
          </div>

          <div className="footer-section footerServices">
            <h3>Serviços</h3>
            <ul>
              <li>
                <a href="/painel">Monitoramento de Plantas</a>
              </li>
              <li>
                <a href="https://sms.devneemiasvieira.com/api/" target="_blank" rel="noreferrer">
                  Documentação da API
                </a>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Redes Sociais</h3>

            <div className="social-media-icons">
              <a href="https://wwww.facebook.com/neemias.vieiraf" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.instagram.com/neemiasvieira/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5513996020483&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.linkedin.com/in/neemiasvieira/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/NeemiasVieira" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyrights">&copy; 2024 Sistema de Monitoramento do Solo - Todos os direitos reservados.</p>
      </div>
    </FooterStyle>
  );
};
