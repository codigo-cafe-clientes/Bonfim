import { HomeClienteSection } from './style'
import {GlideJS, GlideJSItem} from "components/Glide"

import {iCliente} from "interfaces/interfaceHome"
import { useEffect, useState } from 'react';

export default function HomeCliente( props?:any ) {

  const [ clients, setClient ] = useState([])

  useEffect(() => {
    fetch('https://panel.contabilidadebonfim.com.br/wp-json/bc/v1/clients')
      .then(response => {
        return response.json()
      })
      .then(body => {
        setClient( body )
      })
  },[])

  return (
    <HomeClienteSection>
      <GlideJS
        id={"cliente"}
        arrows={true}
        Type={"carousel"}
        StartAt={0}
        PerView={4}
        Bound={true}
      >

        { 
          clients.map((client:iCliente) => (
            <GlideJSItem id={client.id} name={client.name} image={client.image} />
          ))
        }

      </GlideJS>
    </HomeClienteSection>
  );
}