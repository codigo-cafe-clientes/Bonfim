import classNames from 'classnames';
import glidecss from './Glide.module.scss';

interface iGlideJS {
  controls  : boolean,
  arrows    : boolean,
  bullets   : boolean
}

export default function Glide( { controls, arrows, bullets }:iGlideJS ) {

  function Arrows() {
    if( !! arrows ) {
      return (
        <div className={glidecss.glide__arrows} data-glide-el='controls'>  
          <button className={classNames({
            [ glidecss['glide__arrow'] ] : true,  
            [ glidecss['glide__arrow--left'] ] : true
          })} data-glide-dir='<' >prev</button>
          <button className={classNames({
            [ glidecss['glide__arrow'] ] : true,  
            [ glidecss['glide__arrow--right'] ] : true
          })} data-glide-dir='>' >next</button>
        </div>
      );
    }
  }

  function Bullets() {
    if( !! bullets ) {
      return (
        <div className={glidecss.glide__bullets} data-glide-el="controls[nav]">
          <button className={glidecss.glide__bullet} data-glide-dir="=0"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=1"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=2"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=3"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=4"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=5"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=6"></button>
          <button className={glidecss.glide__bullet} data-glide-dir="=7"></button>
        </div>
      );
    }
  }



  return (
    <div className={glidecss.glide}>
      <div className={glidecss.glide__track} data-glide-el="track" >
        <ul className={glidecss.glide__slides}>
          <li className={glidecss.glide__slide}>conteudo1</li>
          <li className={glidecss.glide__slide}>conteudo2</li>
          <li className={glidecss.glide__slide}>conteudo3</li>
          <li className={glidecss.glide__slide}>conteudo4</li>
          <li className={glidecss.glide__slide}>conteudo5</li>
          <li className={glidecss.glide__slide}>conteudo6</li>
          <li className={glidecss.glide__slide}>conteudo7</li>
          <li className={glidecss.glide__slide}>conteudo8</li>
        </ul>
      </div>

      { Arrows() }
      { Bullets() }
      
    </div>
  );
}