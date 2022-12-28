import ContatoFormulario from "view/Contato/Formulario";
import ContatoMapa from "view/Contato/Mapa";
import { ContatoMain } from "view/Contato/style";

import  HeroImage from 'assets/images/banner-default.png';

interface Props {
  setTitle : React.Dispatch<React.SetStateAction<string | undefined>>,
  setBackground : React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Contato( { setTitle, setBackground }:Props ) {

  setTitle( 'Contato' );
  setBackground( HeroImage );

  return (
    <>
      <ContatoMain>
        <ContatoMapa />
        <ContatoFormulario />      
      </ContatoMain>
    </>
  );
}