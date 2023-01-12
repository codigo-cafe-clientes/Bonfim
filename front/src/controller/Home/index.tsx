import Slider from "components/Slider";
import HomeSobre from "view/Home/Sobre";
import HomeCliente from "view/Home/Cliente";
import HomeVideo from "view/Home/Video";
import HomeConsulta from "view/Home/Consulta";
import CtaContact from "components/CtaContact";

import { useState } from "react";

import { mSobre } from "model/Home";

export default function Home() {

  const [ client, setClient ] = useState();
  const [ about, setAbout ] = useState();
  const [ video, setVideo ] = useState();
  const [ consult, setConsult ] = useState();

  return (
    <>
      <Slider />
      <HomeSobre
        title={mSobre().title}
        content={mSobre().content}
        image={mSobre().image}
        alt={mSobre().alt}
      />
      <HomeCliente />
      <HomeVideo />
      <HomeConsulta />
      <CtaContact />
    </>
  );
}