import Video from 'assets/images/video.jpg';
import { HomeVideoSection } from './style';

export default function HomeVideo() {
  return (
    <HomeVideoSection>
      <img src={Video} alt="Imagem de play do video" />
    </HomeVideoSection>
  );
}