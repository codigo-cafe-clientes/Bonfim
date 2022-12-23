import {ServicosSection} from './style';

import hero from 'assets/images/banner-top.png'
import contact from 'assets/images/banner-contact.png'

import { theme } from 'components/Layout/theme';

export default function Servicos() {
  return (
    <>
    <ServicosSection theme={theme} >

      <section>
      <img src={hero} alt="imagem de topo da página" />
      <span>Serviços</span>
      </section>

      <section>
          <div>
            <div>
              <img src="https://via.placeholder.com/274" alt="" />
            </div>
            <div>
              <h2>Abertura de empresa</h2>
              <p>Providenciamos toda a documentação necessária para a abertura da sua empresa. Fazemos os registros necessários junto a Receita Federal, Receita Estadual,
                  Prefeitura, Junta Comercial e/ou Cartório, também acompanhamos todos os processos necessários para a obtenção de certificados e licenças como Bombeiros, Secretaria
                  da Saúde e Meio Ambiente, etc.
                  <h3>MEI - Microempreendedor Individual</h3>
                  Na verdade um MEi não precisa contratar um escritório de contabilidade. pois a legislação não obriga a escrituração contábil, entretanto é sempre por ter uma assessoria contábil nesse
                  momento para planejar juntos os futuros da sua empresa. O Faturamento mensal para essa modalidade é de RS 60.000,00 por ano, acima desse valor a empresa já está obrigada a
                  manter a escrituração contábil como qualquer outro empreendimento.
                  Nosso Escritório de Contabilidade recebe constantemente pessoas com dúvidas se vale a pena optar pelo Empreendedor Individual com o objetivo de não ter custo com assessoria
                  contàbil e pagamento de impostos que incidem sobre o faturamento da empresa.
                  Uma das reflexões que usamos para qualquer empreendedor é o seguinte: Você tem expectativa de crescimento para sua empresa? Se sim, quanto? Na grande maioria querem faturar
                  mais que R$60.000,00 ao ano, alguns falam que irão faturar esse valor em 1 trimestre. Sendo assim, inviabilizando a abertura na categoria Empreendedor Individual.
                  Mesmo na Abertura de Empresa de Empreendedor Individual é recomendável que o empresário procure ajuda de um contador ou um escritório de contabilidade para ajuda-to com
                  informações essências como fluxo de caixa, ponto de equilíbrio, retomo do investimento e principalmente sobre tributação. O Empreendedor precisa saber o que vai acontecer com a
                  Empresa dele quando o seu faturamento ultrapassar o limite do Empreendedor Individual.
                  Grande parte das pequenas empresas ainda enxerga uma empresa de contabilidade como um custo, quando na verdade é um investimento. O profissional contábil está preparado para
                  ajuda-lo de forma global. Pensando que a legislação obriga que a escrituração contábil deva ser realizada por um profissional devidamente habilílado perante o Conselho Regional de
                  Contabilidade, a empresa precisa contratar profissionais capacitados para realização dessas tarefas. Fica sem dúvida mais barato contratar um bom escritório de contabilidade para
                  auxiliá-lo nesses processos.
                </p>
              <button>orçamento</button>
            </div>
          </div>

          <div>

            <div>
              <img src="https://via.placeholder.com/274" alt="" />
            </div>

            <div>
              <h2>Departamento fiscal</h2>
              <p>Os serviços consistem tanto na prestação de assessoria, mediante orientação legal dos procedimentos e controles internos da empresa nos aspectos fiscais e contábeis,
                necessários à devida operacionalização das obrigações acessórias do fisco municipal, estadual e federal; quanto na execução dos serviços abaixo indicados:
                <ul>
                  <li>Escrituração de notas fiscais de compra e venda de mercadorias, de serviços, apuração dos impostos incidentes (ISS, ICMS, PIS. COFINS, etc.). elaboração e
                      apresentação de informações ao fisco municipal, estadual e Federal;</li>
                  <li>Apuração do Imposto de Renda Pessoa Jurídica e Contribuição Social sobre o Lucro Líquido, bem como elaboração e entrega de DIPJ, DFC e Escrituração do LALUR,
                      SPED Contábil e fiscal. E-social.</li>
                </ul>              
              </p>
              <button>orçamento</button>
            </div>

          </div>

          <div>
            <div>
              <img src="https://via.placeholder.com/274" alt="" />
            </div>
            <div>
              <h2>Contabilidade</h2>
              <p>Executamos todos os serviços e procedimentos contábeis, incluindo total suporte contábil para a tomada de decisões.
                  Provemos controles patrimoniais. balanços, balancetes, demonstrativos financeiros, escrituração de livros (diário, razão, lalur, etc), conciliações contábeis e SPED contábil.
              </p>
              <button>orçamento</button>
            </div>
          </div>
          
          <div>            
            <div>
              <img src="https://via.placeholder.com/274" alt="" />
            </div>
            <div>
              <h2>Departamento pessoal</h2>
              <p>O cumprimento das obrigações trabalhistas e do recolhimento dos encargos sociais requer especial atenção, seja pela peculiar condição da relação entre empresa e seus
                empregados, seja pela exigüidade de prazos para a execução das muttas rotinas envolvidas, aliadas às severas multas quando não-observância.
                Para isso, o Departamento de Recursos Humanos da EACO tem profissionais capacitados para melhor atendê-los no que diz respeito aos seguintes serviços:
                <ul>
                  <li>Registro de funcionários da empresa;</li>
                  <li>Elaboração de cálculos de rescisões contratuais e acompanha as homologações junto aos sindicatos;</li>
                  <li>Elaboração de folha de pagamento;</li>
                  <li>Emissão de guias de recolhimento dos encargos sociais;</li>
                  <li>Emissão de recibo de pagamento de férias;</li>
                  <li>Elaboração e entrega da RAIS (Relação Anual de Informações Sociais);</li>
                  <li>Elaboração e entrega mensal do CAGED (Cadastro Geral de Admitidos e Desligados);</li>
                  <li>Orientações na organização e controle da jornada de trabalho, acordos de compensação, escala de revezamentos, banco de horas, intervalos de descanso e apontamentos de cartões ponto;</li>
                  <li>Toda e qualquer assessoria necessáôa ao acompanhamento das obrigações referente aos seus funcionáôos, dentro do que dita a legislação trabalhista atual.
                      Assessoria no que tange à segurança e medicina do trabalho, compreendendo:</li>
                  <li>Elaboração do CAT (Comunicação de Acidente de Trabalho);</li>
                  <li>Orientação no que tange os exames médicos obrigatórios admissionais, demissionais e periódicos;</li>
                  <li>Demais assessoria e consultoôa nesta área.</li>
                </ul>               
              </p>
              <button>orçamento</button>
            </div>
          </div>

          <div>
            <div>
              <img src="https://via.placeholder.com/274" alt="" />
            </div>
            <div>
              <h2>BPO - Busness process outsourcion</h2>
              <p>Como todo segmento empresarial, alguns processos não fazem parte do foco do negócio, mas são imprescindiveis ao funcionamento da sua empresa. Sendo assim a
                  Bonfim Contabilidade propõe mais uma solução de Business Process Outsoursing, que visa tercerizar o processo de negócio de uma organização, que normalmente não
                  faz parte de seu core business.
                  Oferecemos serviços com recursos dedicados e compartilhados. Quando se fala em terceirização de serviços ou processos internos, muitas empresas ainda têm uma
                  desconfiança natural. Terceirizar serviços significa, para a maioria dos gestores, perder o controle de suas atividades e equipes. Estas perdas, consequentemente, tornamse
                  um risco que nenhuma empresa quer assumir. Qualquer processo, seja terceirizado ou próprio, apresenta riscos, quando não gerenciado da forma adequada. Ao optar
                  por um BPO (Outsourcing de Processos de Negócios), a empresa não estará, necessariamente, aumentando os riscos. Eles serão os mesmos, porém o controle e a gestão
                  serão mais eficazes, trazendo retornos consistentes para o negócio.
              </p>
              <button>orçamento</button>
            </div>
          </div>
      </section>
      
      <img src={contact} alt="banner de contato" />
    </ServicosSection>
    </>
  );
}