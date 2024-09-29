import { SquadStyle } from "./SquadStyle";
import neemias from "@assets/img/neemias.png";
import caio from "@assets/img/caio.png";
import luan from "@assets/img/luan.png";
import luis from "@assets/img/luis.png";

export const Squad = () => {
  return (
    <SquadStyle>
      <h2>Nossa Equipe</h2>
      <div className="pessoas">
        <div className="pessoa">
          <h3>Neemias Vieira</h3>
          <img src={neemias} alt="" />
          <h4>Líder, Arquiteto e Desenvolvedor</h4>
        </div>
        <div className="pessoa">
          <h3>Luan Carusi</h3>
          <img src={luan} alt="" />
          <h4>Pesquisador e Product Manager</h4>
        </div>
        <div className="pessoa">
          <h3>Caio Monteiro</h3>
          <img src={caio} alt="" />
          <h4>Desenvolvedor Machine Learning e IA</h4>
        </div>
        <div className="pessoa">
          <h3>Luis Guilherme</h3>
          <img src={luis} alt="" />
          <h4>Pesquisador e Documentador</h4>
        </div>
      </div>
    </SquadStyle>
  );
};
