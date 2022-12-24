import Hero from "components/Hero";
import ServicoConteudoDireito from "view/Servico/ConteudoDireito";
import ServicoConteudoEsquerdo from "view/Servico/ConteudoEsquerdo";

import  HeroImg from 'assets/images/banner-default.png';
import CtaContact from "components/CtaContact";

export default function Servicos() {

  const data_hero = {
    'title' : 'Serviços',
    'img' : HeroImg
  };

  return (
    <>
      <Hero data={data_hero} />
      <ServicoConteudoDireito />
      <ServicoConteudoEsquerdo />
      <ServicoConteudoDireito />
      <ServicoConteudoEsquerdo />
      <ServicoConteudoDireito />
      <CtaContact />
    </>
  );
}