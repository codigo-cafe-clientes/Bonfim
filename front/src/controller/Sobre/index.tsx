import { SobreSection } from './style';

import logo from 'assets/images/logo.png'
import hero from 'assets/images/banner-top.png'
import desk from 'assets/images/photo-desk.png'
import contact from 'assets/images/banner-contact.png'

import { theme } from "components/Layout/theme";

export default function Sobre() {
  return (
    <>
    <SobreSection theme={theme} >

        <section>
            <div>
            <img src={hero} alt="banner página" />
            <span>Conheça nossa história</span>
            </div>
            <div>
            <img src={logo} alt="logo Bonfim contabilidade" />
            </div>    
        </section>          

        <section>
            <img src={desk} alt="foto do escritório Bonfim contabilidade" />
                           
              <p>Constituída em Novembro de 2003 , a Bonfim Contabilidade oferece a seus
                  clientes, serviços de assessoria e consultoria contábil, fiscal, trabalhista e
                  empresarial, desde pequenas à grandes empresas, entre os mais diversos
                  ramos de atividade, com uma equipe de profissionais capacitados e
                  preparados para manter um alto grau de qualidade nos serviços prestados.
                  {/* como fazer o texto pular a linha */}
                  Organizada nas áreas fiscal, trabalhista, contabilidade, societário, financeiro,
                  expedição de documentos e consultoria empresarial, possui um coordenador
                  para cada área, com fonnação superior e capacitação técnica na atividade
                  desenvolvida, o que resulta em segurança e qualidade nos serviços
                  prestados.
              </p>          
              
        </section>
        
        <section>
          <div>
            <h2>Missão</h2>
            <p>Entender as necessidades e oferecer aos nossos clientes, serviços fiscais,
                contábeis e trabalhistas de qualidade, com rapidez e eficácia, para auxiliar
                nas decisões gerenciais, promover soluções seguras aos problemas e
                desafios da atividade empresarial moderna e demonstrar transparência
                profissional.
            </p>
          </div>

          <div>
            <h2>Visão</h2>
            <p>Ser referência em prestação de serviços de contabilidade e consultoria
              empresarial.
            </p>  
          </div>
          <div>
            <h2>Valores</h2>
            <p>Respeito às pessoas, aos colaboradores e à sociedade em qualquer situação.
                Responsabilidade com os clientes e profissionais.
                Ética e Transparência nos negócios e no ambiente de trabalho.
                Qualidade desde o atendimento até a solução das demandas dos clientes.
                Foco em Resultados.
            </p>
          </div>
        </section>       
      
        <section>
        <span>album de fotos será aqui</span>
        </section>

        
        
        <section>
          <div>
            <h2>Objetivo</h2>
            <p>Oferecer aos clientes, serviços de contabilidade e consultoria empresarial, a
              fim de apresentar resultados e soluções para as suas necessidades.
            </p>
          </div>
          <div>
            <h2>Comprometimento</h2>
            <p>Honrar compromissos firmados com o foco em sempre fazer o melhor,
              atendendo plenamente o que foi acordado.
            </p>
          </div>
          <div>
            <h2>Seriedade</h2>
            <p>Empenhar-se totalmente na execução de suas obrigações com dedicação e
              foco.
            </p>
          </div>
          <div>
            <h2>Objetivo e agilidade</h2>
            <p>Primar pela solvência de problemas com grande rapidez e assertividade.</p>
          </div>
          <div>
            <h2>Honestidade</h2>
            <p>Premissa para qualquer relação da empresa com clientes, parceiros e
              fornecedores.
            </p>
          </div>  
        </section>      
        
        <img src={contact} alt="banner de contato" />      
    </SobreSection>
    </>
  );
}