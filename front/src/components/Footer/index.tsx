import { Link } from 'react-router-dom';
import { MainFooter } from "./style";
import { theme } from 'components/Layout/theme';

import Logo  from 'assets/images/logo-branco.png';

export default function Footer() {
  return (
    <MainFooter theme={theme}>
      <section>
        <div>
          <img src={ Logo } alt="Logo branco Bonfim Contabilidade"/>
          <p>(019) 3395-0305</p>
          <p>Rua Dr. Quirino, 388 - Centro</p>
          <p>Campinas / SP</p>
        </div>
        <nav>
          <ul>
            <li><h3>Empresa</h3></li>
            <li><Link to="/empresa-bonfim-contabilidade">Sobre</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><h3>Serviços</h3></li>
            <li><Link to="/servicos" >Abertura de empresa</Link></li>
            <li><Link to="/servicos" >Contabilidade</Link></li>
            <li><Link to="/servicos" >Departamento Fiscal</Link></li>
            <li><Link to="/servicos" >Departamento Pessoal</Link></li>
            <li><Link to="/servicos" >BPO</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><h3>Consulta</h3></li>
            <li><Link to="/">Facilitador Contábil</Link></li>
            <li><Link to="/">Pessoa Física</Link></li>
            <li><Link to="/">Pessoa Jurídica</Link></li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li><h3>Siga-nos</h3></li>
          </ul>
        </nav>
      </section>
      <section>
        <p>todos os direitos reservados</p>
      </section>
    </MainFooter>
  );

}