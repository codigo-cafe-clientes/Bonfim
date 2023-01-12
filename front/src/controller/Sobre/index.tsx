import SobreLogo from "view/Sobre/LogoPrincipal";
import SobreConteudoPrincipal from "view/Sobre/ConteudoPrincipal";
import SobreMvv from "view/Sobre/Mvv";
import CtaContact from "components/CtaContact";
import SobreConteudo from "view/Sobre/Conteudo";
import { mFoto } from "model/Sobre";
import HeroImage from 'assets/images/banner-default.png';
import { GlideJS, GlideJSItem } from "components/Glide";
import { iFoto } from "interfaces/interfaceSobre";


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

      <GlideJS
        id="fotos"
        arrows={true}
        Type={"carousel"}
        StartAt={0}
        PerView={4}
        Bound={true}
      >
        { mFoto().map((item:iFoto, index:number ) => (
          <GlideJSItem id={index} name={item.name} image={item.image} />
        ))}
      </GlideJS>

      <SobreConteudo />
      
      <CtaContact />
    </>
  );
}