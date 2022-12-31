import { HomeConsultaSection } from "./style";
import {ScrollRestoration} from "react-router-dom";

export default function HomeConsulta() {
  return (
    <HomeConsultaSection>
      <div>Consulta</div>
      <div>Facilitador contabil</div>
      <div>Pessoa Juridica</div>
      <div>Pessoa Física</div>

      {/*<ScrollRestoration />*/}

    </HomeConsultaSection>
  );
}