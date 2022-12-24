import Logo from 'assets/images/logo.png';
import { SobreLogoDiv } from './style';

export default function SobreLogo() {
  return (
    <SobreLogoDiv>
      <img src={Logo} alt="Logomarca do Bonfim Contabilidade" />
    </SobreLogoDiv>
  );
}