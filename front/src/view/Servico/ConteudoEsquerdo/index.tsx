import { Link } from "react-router-dom"
import DOMPurify from 'dompurify'

import { ServicoConteudoEsquerdoSection } from "./style"
import { theme } from "components/Layout/theme"
import { iServico } from "interfaces/interfaceServico"

export default function ServicoConteudoEsquerdo( {id,name,excerpt,content,image,background}:iServico ) {
  return (
    <ServicoConteudoEsquerdoSection theme = {theme}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h2 dangerouslySetInnerHTML={{__html: DOMPurify.sanitize( name )}}></h2>
        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize( content )}}></div>
        <Link to="/contato">Orçamento</Link>
      </div>
    </ServicoConteudoEsquerdoSection>
  );
}