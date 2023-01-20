import DOMPurify from "dompurify"
import { SliderSection } from "./style"

export function Slider ( { children }:any ) {
  return (<SliderSection>{children}</SliderSection>)
}

export function SliderList ( props?:any ) {
  console.log( props )
  return (
    <li 
      key={props.item.id}
      dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize( props.item.name ) }}
      onClick={event => {
        props.setCurrent({
          id: props.item.id,
          name: props.item.name,
          excerpt: props.item.excerpt,
          background: props.item.background
        })
      }}
    ></li>)
}

export function SliderItem ( props?:any ) {
  return (
    <div 
      key={props?.current?.id}
      style={{
        backgroundImage : `url(${ props?.current?.background })`
      }}
    >
      <h3 dangerouslySetInnerHTML={{ __html : DOMPurify.sanitize( props?.current?.name ) }} ></h3>
      <p>{props?.current?.excerpt}</p>
    </div>
  )
}
