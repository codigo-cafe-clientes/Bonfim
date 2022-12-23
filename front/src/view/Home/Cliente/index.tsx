import { HomeClienteSection } from './style';
import Glide from 'components/Glide';

export default function HomeCliente() {
  return (
    <HomeClienteSection>
      <Glide controls={true} arrows={true} bullets={true} />
    </HomeClienteSection>
  );
}