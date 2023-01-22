import { HomeConsultaSection } from "./style";
import ConteudoConsulta from "view/Home/Consulta/ConteudoConsulta"
import { FaSearch } from "react-icons/fa"

export default function HomeConsulta( props:any ) {
  return (
    <HomeConsultaSection>                  
      <div>
        <h1><FaSearch /> {props?.data?.consult.title}</h1>
        <p>{props?.data?.consult.text}</p>
      </div>

      {props?.data?.consults.map((item:any) => {
        return ( <ConteudoConsulta data={item} /> )
      })}
      
    </HomeConsultaSection>
  );
}