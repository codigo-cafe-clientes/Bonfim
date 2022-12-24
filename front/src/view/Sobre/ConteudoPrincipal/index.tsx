import ImgDesk from 'assets/images/photo-desk.png';
import { SobreConteudoPrincipalSection } from './style';

export default function SobreConteudoPrincipal() {
  return (
    <SobreConteudoPrincipalSection>
      <img src={ImgDesk} alt="Escritório do Bonfim Contabilidade" />
      <div>
        <p>Constituída em Novembro de 2003 , a Bonfim Contabilidade oferece a seus clientes, serviços de assessoria e consultoria contábil, fiscal, trabalhista e empresarial, desde pequenas à grandes empresas, entre os mais diversos ramos de atividade, com uma equipe de profissionais capacitados e preparados para manter um alto grau de qualidade nos serviços prestados.</p>
        <p>Organizada nas áreas fiscal, trabalhista, contabilidade, societário, financeiro, expedição de documentos e consultoria empresarial, possui um coordenador para cada área, com fonnação superior e capacitação técnica na atividade desenvolvida, o que resulta em segurança e qualidade nos serviços prestados.</p>
      </div>
    </SobreConteudoPrincipalSection>
  );
}