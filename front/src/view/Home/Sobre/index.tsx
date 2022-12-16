import { HomeSobreSection } from './style';

import Logotipo from 'assets/images/logotipo.jpg';
import { theme } from 'components/Layout/theme';

export default function HomeSobre() {
  return (
    <HomeSobreSection theme={theme} >
      <img src={ Logotipo } alt="Logotipo do Bonfim Contabilidade" />
      <div>
        <h2>Nossa empresa</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Volutpat tellus et tellus molestie donec. Ullamcorper ultrices faucibus mi vel viverra consequat orci sit. Id et nibh vel massa diam pulvinar. Euismod turpis neque ipsum nisi consectetur fermentum. In natoque libero arcu iaculis nunc. Congue diam diam habitant sodales tortor donec. Amet elit cursus rhoncus integer eget fringilla.</p>
      </div>
    </HomeSobreSection>
  );
}