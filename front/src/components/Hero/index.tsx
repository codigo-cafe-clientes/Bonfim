import { HeroSection } from "./style";
import { theme } from 'components/Layout/theme.js';

interface Props {
  'title' : string | undefined,
  'background' : string | undefined
}

export default function Hero( { title, background }:Props ) {
  return (
    <HeroSection theme={theme} img={background} >
      <div>
        <h1>{title}</h1>
      </div>
    </HeroSection>
  );
}