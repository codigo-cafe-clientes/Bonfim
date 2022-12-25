import ContatoFormulario from "view/Contato/Formulario";
import ContatoMapa from "view/Contato/Mapa";
import { ContatoMain } from "view/Contato/style";

import  HeroImg from 'assets/images/banner-default.png';
import Hero from "components/Hero";

export default function Contato() {

  const data_hero = {
    'title' : 'Contato',
    'img' : HeroImg
  }

  return (
    <>
      <Hero data={data_hero} />
      <ContatoMain>
        <ContatoMapa />
        <ContatoFormulario />      
      </ContatoMain>
    </>
  );
}