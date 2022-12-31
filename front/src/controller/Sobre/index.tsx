import SobreLogo from "view/Sobre/LogoPrincipal";
import SobreConteudoPrincipal from "view/Sobre/ConteudoPrincipal";
import SobreMvv from "view/Sobre/Mvv";
import CtaContact from "components/CtaContact";
import SobreConteudo from "view/Sobre/Conteudo";

import HeroImage from 'assets/images/banner-default.png';
import Sobre01 from 'assets/images/sobre01.jpg';
import Sobre02 from 'assets/images/sobre02.jpg';
import Sobre03 from 'assets/images/sobre03.jpg';
import Sobre04 from 'assets/images/sobre04.jpg';
import Sobre05 from 'assets/images/sobre05.jpg';

interface Props {
  setTitle : React.Dispatch<React.SetStateAction<string | undefined>>,
  setBackground : React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Sobre( { setTitle, setBackground }:Props ) {

  setTitle( 'Conheça nossa história' );
  setBackground( HeroImage );
  const imagens = [ Sobre01, Sobre02, Sobre03, Sobre04, Sobre05 ];

  return (
    <>
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