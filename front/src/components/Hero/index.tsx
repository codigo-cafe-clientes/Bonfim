import { HeroDiv } from "./style";
import { theme } from 'components/Layout/theme.js';

export default function Hero( props:any ) {
  return (
    <HeroDiv theme={theme} img={props.data.img} >
      <h1>{props.data.title}</h1>
    </HeroDiv>
  );
}