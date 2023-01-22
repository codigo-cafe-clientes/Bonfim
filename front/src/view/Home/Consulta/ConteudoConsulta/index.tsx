import { ConteudoConsultaSection } from "./style";
import { theme } from 'components/Layout/theme';
import { FaShareAlt } from 'react-icons/fa'

export default function HomeConsulta( props:any ) {

console.log(props);

  return (
    <ConteudoConsultaSection theme = { theme }>
        <div>
          <h3>{props.data.home_consult_category} <FaShareAlt /></h3>
        </div>
        <div>
          <ul>
            {props?.data?.home_consult_link.map((link:any) => (
              <li><a href={link.home_consult_link_url} target="_blank">{link.home_consult_link_title}</a></li>
            ))}
          </ul>
        </div>                  
    </ConteudoConsultaSection>
  );
}