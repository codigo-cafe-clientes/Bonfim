import { ServicoConteudoEsquerdoSection } from "./style";
import { theme } from "components/Layout/theme"

export default function ServicoConteudoEsquerdo() {
  return (
    <ServicoConteudoEsquerdoSection theme = {theme}>
      <div>
        <img src="https://via.placeholder.com/274" alt="" />
      </div>
      <div>
        <h2>Contabilidade</h2>
        <p>Executamos todos os serviços e procedimentos contábeis, incluindo total suporte contábil para a tomada de decisões. Provemos controles patrimoniais. balanços, balancetes, demonstrativos financeiros, escrituração de livros (diário, razão, lalur, etc), conciliações contábeis e SPED contábil.</p>
        <button>orçamento</button>
      </div>
    </ServicoConteudoEsquerdoSection>
  );
}