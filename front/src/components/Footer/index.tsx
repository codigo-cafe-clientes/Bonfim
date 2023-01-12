import { Link } from 'react-router-dom';
import { MainFooter } from "./style";
import { theme } from 'components/Layout/theme';

import Logo  from 'assets/images/logo-branco.png';
import Linkedin  from 'assets/images/icon-linkedin.png';
import Instagram  from 'assets/images/icon-instagram.png';
import Facebook  from 'assets/images/icon-facebook.png';

export default function Footer() {
  return (
    <MainFooter theme={theme}>
      <section>
        <div>
          <img src={ Logo } alt="Logo branco Bonfim Contabilidade"/>
          <div>
            <p>(019) 3395-0305</p>
            <p>Rua Dr. Quirino, 388 - Centro</p>
            <p>Campinas / SP</p>
          </div>
        </div>
        
        <menu>
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
              <li>
                <a href="#"><img src={ Linkedin } alt="Linkedin"/></a>
                <a href="#"><img src={ Instagram } alt="Instragram"/></a>
                <a href="#"><img src={ Facebook } alt="Facebook"/></a>
              </li>
            </ul>
          </nav>
        </menu>
        
        
      </section>
      <section>
        <p>&copy; 2022 - Todos os direitos reservados | desenvolvido por <a href="https://codigo.cafe" target="_blank">Código Café</a>.</p>
      </section>
    </MainFooter>
  );

}