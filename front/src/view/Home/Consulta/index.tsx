import { HomeConsultaSection } from "./style";
import {ScrollRestoration} from "react-router-dom";
import ConteudoConsulta from "view/Home/Consulta/ConteudoConsulta"

import consult from 'assets/images/consult.png';

export default function HomeConsulta() {
  return (
    <HomeConsultaSection>                  
      <div>
        <h1>Consulta</h1>
      <p>Links úteis para consulta, aproveite!</p>
      </div>
      <ConteudoConsulta />
      <ConteudoConsulta />
      <ConteudoConsulta />
    </HomeConsultaSection>
  );
}