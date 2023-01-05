import ImgDesk from 'assets/images/photo-desk.png';
import { SobreMvvSection } from './style';
import { theme } from 'components/Layout/theme';


export default function SobreMvv() {
  return (
    <SobreMvvSection theme={theme}>
      <div>
        <h2>Missão</h2>
        <p>Entender as necessidades e oferecer aos nossos clientes, serviços fiscais,contábeis trabalhistas de qualidade, com rapidez e eficácia, para auxiliar nas decisões gerenciais, promover soluções seguras aos problemas e desafios da atividade empresarial moderna e demonstrar transparência profissional.</p>
      </div>
      <div>
        <h2>Visão</h2>
        <p>Ser referência em prestação de serviços de contabilidade e consultoria empresarial.</p>  
      </div>
      <div>
        <h2>Valores</h2>
        <p>Respeito às pessoas, aos colaboradores e à sociedade em qualquer situação. Responsabilidade com os clientes e profissionais. Ética e Transparência nos negócios e no ambiente de trabalho. Qualidade desde o atendimento até a solução das demandas dos clientes. Foco em Resultados.</p>
      </div>
    </SobreMvvSection>
  );
}