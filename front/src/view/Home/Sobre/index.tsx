import { HomeSobreSection } from './style';
import { theme } from 'components/Layout/theme';

export default function HomeSobre( props:any ) {
  return (
    <HomeSobreSection theme={theme} >
      <img src={props?.data?.about.image} alt={props?.data?.about.title} />
      <div>
        <h2>{props?.data?.about.title}</h2>
        <p>{props?.data?.about.text}</p>
      </div>
    </HomeSobreSection>
  );
}