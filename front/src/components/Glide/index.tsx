import { useEffect } from 'react';
import Glide from '@glidejs/glide';
import { Arrows, Bullets, Controls } from './Components';
import { iGlideJS } from "interfaces/interfaceGlide";
import {iCliente} from "interfaces/interfaceHome";
import glidecss from './Glide.module.scss';


export function GlideJS( {...data}:iGlideJS ) {
  const { children, id, arrows, bullets, controls, quantity, Type, StartAt, PerView, Autoplay, Bound } = data;
  const Slider = new Glide( '#'+id );
  useEffect(() => {
    Slider.update({ type : Type });
    Slider.update({ startAt : StartAt });
    Slider.update({ perView : PerView });
    Slider.update({ autoplay : Autoplay });
    Slider.update({ bound : Bound });
    Slider.mount();
  },[Slider, Type, StartAt, PerView, Autoplay, Bound]);

  return (
    <div id={id} className={glidecss.glide}>
      <div className={glidecss.glide__track} data-glide-el="track" >
        <ul className={glidecss.glide__slides}>
          {children}
        </ul>
      </div>
      { ( !!controls ) ? <Controls /> : '' }
      { ( !!arrows ) ? <Arrows /> : '' }
      { ( !!bullets ) ? <Bullets qnt={quantity} /> : '' }
    </div>
  );
}

export function GlideJSItem( { id, name, image }:iCliente ) {
  return (
    <li className={glidecss.glide__slide} key={id}><img src={image} alt={name}/></li>
  );
}