import { VideoModalDiv } from "./style"
import  { FaTimes } from "react-icons/fa"

export default function Modal ( { embed, active, setActive }:any ) {
  return (
    <VideoModalDiv className={active}>
      <div>
        <FaTimes onClick={ e => setActive("") } />
        <div dangerouslySetInnerHTML={{ __html : embed }}></div>
      </div>
    </VideoModalDiv>
  )
}