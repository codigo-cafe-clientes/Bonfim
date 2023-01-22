import styled from 'styled-components'

export const VideoModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( 0,0,0,0.8 );
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: opacity .3s;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  div {
    max-width: 700px;
    aspect-ratio: 16/9;
    svg {
      float: right;
      color: #fff;
      width: 24px;
      height: 24px;
      cursor: pointer;
      margin: 1rem 0;
    }
    div {
      iframe {}
    }
  }
`