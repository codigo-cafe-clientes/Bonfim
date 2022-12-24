import SobreLogo from "view/Sobre/LogoPrincipal";
import SobreConteudoPrincipal from "view/Sobre/ConteudoPrincipal";
import Hero from "components/Hero";

import HeroImg from 'assets/images/banner-default.png';
import SobreMvv from "view/Sobre/Mvv";
import CtaContact from "components/CtaContact";
import SobreConteudo from "view/Sobre/Conteudo";

export default function Sobre() {

  const data_hero = {
    'title' : 'Conheça a história',
    'img' : HeroImg
  }

  return (
    <>
      <Hero data={data_hero} /> 
      <SobreLogo />
      <SobreConteudoPrincipal />
      <SobreMvv />
      <SobreConteudo />
      <SobreConteudo />
      <SobreConteudo />
      <SobreConteudo />
      <SobreConteudo />
      <CtaContact />
    </>
  );
}