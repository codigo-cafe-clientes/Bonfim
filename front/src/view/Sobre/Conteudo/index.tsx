import { SobreConteudoSection } from './style';
import { theme } from 'components/Layout/theme';



export default function SobreConteudo() {
  return (
    <SobreConteudoSection theme = {theme}>
        <div>
          <h2>Objetivos</h2>
          <p>Oferecer aos clientes, serviços de contabilidade e consultoria empresarial, a fim de apresentar resultados e soluções para as suas necessidades.</p>
        </div>

        <div>
          <h2>Comprometimento</h2>
          <p>Honrar compromissos firmados com o foco em sempre fazer o melhor, atendendo plenamente o que foi acordado.</p>
        </div>

        <div>
          <h2>Seriedade</h2>
          <p>Empenhar-se totalmente na execução de suas obrigações com dedicação e foco.</p>
        </div>

        <div>
          <h2>Objetividade e Agilidade</h2>
          <p>Primar pela solvência de problemas com grande rapidez e assertividade.</p>
        </div>

        <div>
          <h2>Honestidade</h2>
          <p>Premissa para qualquer relação da empresa com clientes, parceiros e fornecedores.</p>
        </div>
    </SobreConteudoSection>
  );
}