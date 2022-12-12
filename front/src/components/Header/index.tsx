import { Link } from 'react-router-dom';
import { MainHeader } from './style';

import { theme } from 'components/Layout/theme';
// import { logo } from 'assets/images/logo.png';

export default function Header() {

  return (

    <MainHeader theme={theme}>
      <img src="" alt="Logo da empresa Bonfim Contabilidade" />
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/empresa-bonfim-contabilidade'>Empresa</Link></li>
          <li><Link to='/servicos'>Serviços</Link></li>
          <li><Link to='/'>Consoltoria</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
        </ul>
      </nav>
    </MainHeader>

  );

}