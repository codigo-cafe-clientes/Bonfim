import { HomeClienteSection } from './style';
import {iCliente} from "interfaces/interfaceHome";
import {GlideJS, GlideJSItem} from "components/Glide";

export default function HomeCliente( props:any ) {
  return (
    <HomeClienteSection>
      <GlideJS
        id={"cliente"}
        arrows={true}
        Type={"carousel"}
        StartAt={0}
        PerView={4}
        Bound={true}
      >
        { props.data.map(( item:iCliente, index:number )=>(
          <GlideJSItem id={index} name={item.name} image={item.image} />
        )) }
      </GlideJS>
    </HomeClienteSection>
  );
}