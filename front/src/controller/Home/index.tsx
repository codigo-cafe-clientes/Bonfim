import { useEffect, useState } from "react"

import { Slider, SliderList, SliderItem } from "components/Slider"
import HomeSobre from "view/Home/Sobre"
import HomeCliente from "view/Home/Cliente"
import HomeVideo from "view/Home/Video"
import HomeConsulta from "view/Home/Consulta"
import CtaContact from "components/CtaContact"

import { iServico } from "interfaces/interfaceServico"

import { mSobre } from "model/Home"

export default function Home() {

  const [ services, setServices] = useState<iServico[] | []> ([])
  const [ currentService, setCurrentService ] = useState<iServico> ()

  useEffect(() => {
    fetch('https://panel.contabilidadebonfim.com.br/wp-json/bc/v1/services')
    .then(response => {
      return response.json()
    })
    .then(body => {
      setServices( body )
      setCurrentService( body[0] )
    })
  }, [])

  return (
    <>

      <Slider>
        <ul>
          {services.map(item => (
            <SliderList item={item} setCurrent={setCurrentService}/>
          ))}
        </ul>
        <SliderItem current={currentService} />
      </Slider>

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