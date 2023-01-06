import ServicoConteudoDireito from "view/Servico/ConteudoDireito";
import ServicoConteudoEsquerdo from "view/Servico/ConteudoEsquerdo";
import CtaContact from "components/CtaContact";

import { ServicoSection } from "./style"



import HeroImage from 'assets/images/banner-default.png';

interface Props {
  setTitle : React.Dispatch<React.SetStateAction<string | undefined>>,
  setBackground : React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Servicos( { setTitle, setBackground }:Props ) {

  setTitle( 'Serviços' );
  setBackground( HeroImage );

  return (
    <ServicoSection>
      <ServicoConteudoDireito />
      <ServicoConteudoEsquerdo />
      <ServicoConteudoDireito />
      <ServicoConteudoEsquerdo />
      <ServicoConteudoDireito />
      <CtaContact />
    </ServicoSection>
  );
}