import Slider from "components/Slider";
import HomeSobre from "view/Home/Sobre";
import HomeCliente from "view/Home/Cliente";
import HomeVideo from "view/Home/Video";
import HomeConsulta from "view/Home/Consulta";
import CtaContact from "components/CtaContact";

import { mSobre, mCliente } from "model/Home";

export default function Home() {
  return (
    <>
      <Slider />
      <HomeSobre
        title={mSobre().title}
        content={mSobre().content}
        image={mSobre().image}
        alt={mSobre().alt}
      />
      <HomeCliente data={mCliente()} />
      <HomeVideo />
      <HomeConsulta />
      <CtaContact />
    </>
  );
}