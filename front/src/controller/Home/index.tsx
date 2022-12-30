import Slider from "components/Slider";
import HomeSobre from "view/Home/Sobre";
import HomeCliente from "view/Home/Cliente";
import HomeVideo from "view/Home/Video";
import HomeConsulta from "view/Home/Consulta";
import CtaContact from "components/CtaContact";

export default function Home() {
  return (
    <>
      <Slider />
      <HomeSobre />
      <HomeCliente />
      <HomeVideo />
      <HomeConsulta />
      <CtaContact />
    </>
  );
}