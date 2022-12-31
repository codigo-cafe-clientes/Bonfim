import { iSobre } from "interfaces/interfaceHome";
import { HomeSobreSection } from './style';
import { theme } from 'components/Layout/theme';

export default function HomeSobre({ title, content, image, alt }:iSobre ) {
  return (
    <HomeSobreSection theme={theme} >
      <img src={image} alt={alt} />
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </HomeSobreSection>
  );
}