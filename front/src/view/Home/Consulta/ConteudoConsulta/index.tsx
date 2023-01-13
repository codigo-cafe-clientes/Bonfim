import { ConteudoConsultaSection } from "./style";
import { theme } from 'components/Layout/theme';



export default function HomeConsulta() {
  return (
    <ConteudoConsultaSection theme = { theme }>
        <div>
          <h1>Facilitador contabil</h1>
          {/* alterar para h3 */}
        </div>
        <div>
        <ul>
          <li><a href="">Prefeitura Campinas</a></li>
          <li><a href="">Prefeitura São Paulo</a></li>
          <li><a href="">Receita Federal</a></li>
          <li><a href="">Caixa Econômica</a></li>
          <li><a href="">Jucesp</a></li>
          <li><a href="">Previdência Social</a></li>
          <li><a href="">Sintegra</a></li>
          <li><a href="">Min. Trabalho e emprego</a></li>
          <li><a href="">Sebrae</a></li>
        </ul>
        </div>                  
    </ConteudoConsultaSection>
  );
}