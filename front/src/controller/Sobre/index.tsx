import SobreLogo from "view/Sobre/LogoPrincipal";
import SobreConteudoPrincipal from "view/Sobre/ConteudoPrincipal";
import SobreMvv from "view/Sobre/Mvv";
import CtaContact from "components/CtaContact";
import SobreConteudo from "view/Sobre/Conteudo";

import HeroImage from 'assets/images/banner-default.png';

interface Props {
  setTitle : React.Dispatch<React.SetStateAction<string | undefined>>,
  setBackground : React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Sobre( { setTitle, setBackground }:Props ) {

  setTitle( 'Conheça nossa história' );
  setBackground( HeroImage );

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