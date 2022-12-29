import glidecss from './Glide.module.scss';
import { Arrows, Bullets, Controls } from './Components';

import Glide from '@glidejs/glide';
import { useEffect } from 'react';

interface iGlideJS {
  images : string[],
  id : string,
  controls ?: boolean,
  arrows ?: boolean,
  bullets ?: boolean,
  Type ?: "slider" | "carousel",
  StartAt ?: number,
  PerView ?: number,
  FocusAt ?: number,
  Gap ?: number,
  Autoplay ?: number | false | undefined,
  Hoverpause ?: boolean,
  Keyboard ?: boolean,
  Bound ?: boolean,
  SwipeThreshold ?: number | boolean,
  DragThreshold ?: number | boolean,
  PerTouch ?: number | boolean,
  TouchRatio ?: number,
  TouchAngle ?: number,
  AnimationDuration ?: number,
  Rewind ?: boolean,
  RewindDuration ?: number,
  AnimationTimingFunc ?: string,
  Direction ?: string,
  Peek ?: number | Object,
  Breakpoints ?: Object,
  Classes ?: Object,
  Throttle ?: number
}

export default function GlideJS( {...data}:iGlideJS ) {

  const { arrows, bullets, controls, images, id } = data;
  const { Type, StartAt, PerView, Autoplay, Bound } = data;
  const quantity =  Number( images.length );
 
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
          {images.map((image, index) => (
            <li key={index} className={glidecss.glide__slide}><img src={image}/></li>
          ))}
        </ul>
      </div>

      { ( !!controls ) ? <Controls /> : '' }
      { ( !!arrows ) ? <Arrows /> : '' }
      { ( !!bullets ) ? <Bullets qnt={quantity} /> : '' }

    </div>
  );
}