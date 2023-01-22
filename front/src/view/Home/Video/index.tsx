import { useState } from 'react';
import Modal from './Modal';
import { HomeVideoSection } from './style';

export default function HomeVideo( props:any ) {

  const [ active , setActive ] = useState<string> ("");

  return (
    <>
      <HomeVideoSection>
        <img src={props?.data?.video.image} alt="Imagem de play do video" onClick={ e => setActive('active') } />
      </HomeVideoSection>
      <Modal embed={props?.data?.video.embed} active={active} setActive={setActive} />
    </>
  );
}