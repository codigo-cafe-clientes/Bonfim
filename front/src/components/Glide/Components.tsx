import classNames from 'classnames';
import glidecss from './Glide.module.scss';

interface Quantidade {
  qnt ?: number
}

export function Arrows() {
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

export function Bullets( { qnt }:Quantidade ) {
  const bullets = [];
  if( !!qnt ) {
    for (let i = 1; i <= qnt; i++) {
      bullets.push(<button key={i} className={glidecss.glide__bullet} data-glide-dir={'=' + i}></button>);
    }
  }
  return (
    <div className={glidecss.glide__bullets} data-glide-el="controls[nav]">
        {bullets}
    </div>
  );
}

export function Controls() {
  return (
    <div data-glide-el="controls">
      <button data-glide-dir="<<">Start</button>
      <button data-glide-dir=">>">End</button>
    </div>
  );
}