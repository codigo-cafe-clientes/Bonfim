import { useEffect, useState } from "react"
import ServicoConteudoDireito from "view/Servico/ConteudoDireito"
import ServicoConteudoEsquerdo from "view/Servico/ConteudoEsquerdo"
import CtaContact from "components/CtaContact"
import { iServico } from "interfaces/interfaceServico"
import { ServicoSection } from "./style"
import HeroImage from 'assets/images/banner-default.png'

interface Props {
  setTitle : React.Dispatch<React.SetStateAction<string | undefined>>,
  setBackground : React.Dispatch<React.SetStateAction<string | undefined>>
}

export default function Servicos( { setTitle, setBackground }:Props ) {

  const [ services, setServices ] = useState([])
  useEffect(() => {
    fetch('https://panel.contabilidadebonfim.com.br/wp-json/bc/v1/services')
    .then(response => {
      return response.json()
    })
    .then(body => {
      setServices( body )
    })
  },[])

  setTitle( 'Serviços' )
  setBackground( HeroImage )

  return (
    <ServicoSection>
      { services.map((service:iServico, index) => {
        return ( index % 2 === 0 ) ?
          <ServicoConteudoDireito
            id={service.id}
            name={service.name}
            excerpt=""
            content={service.content}
            image={service.image}
            background=""
          />
        :
          <ServicoConteudoEsquerdo
            id={service.id}
            name={service.name}
            excerpt=""
            content={service.content}
            image={service.image}
            background=""
          />
      }) }
      
      {/* <ServicoConteudoEsquerdo /> */}
      {/* <ServicoConteudoDireito /> */}
      {/* <ServicoConteudoEsquerdo /> */}
      {/* <ServicoConteudoDireito /> */}
      <CtaContact />
    </ServicoSection>
  );
}