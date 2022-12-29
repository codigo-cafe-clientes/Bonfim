import { HomeClienteSection } from './style';
import GlideJS from 'components/Glide';

import logo01 from "assets/images/logo-01.png";
import logo02 from "assets/images/logo-02.png";
import logo03 from "assets/images/logo-03.png";
import logo04 from "assets/images/logo-04.png";
import logo05 from "assets/images/logo-05.png";

export default function HomeCliente() {

  const imagens = [ logo01, logo02, logo03, logo04, logo05 ];

  return (
    <HomeClienteSection>
      <GlideJS 
        arrows={true}
        images={imagens} 
        id={'cliente'}
        Type={'carousel'}
        StartAt={1}
        PerView={4}
        Bound={true}
      />
    </HomeClienteSection>
  );
}