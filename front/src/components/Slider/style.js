import styled from 'styled-components'

export const SliderSection = styled.section`
  height: 500px;
  margin-bottom: 40px;
  display: flex;

  div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  ul {
    list-style: none;
    background-color: #4273B2;
    max-width: 300px;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-itens: flex-start;
    margin: 0;
    padding: 0;

    li {
      color: #fff;
      margin: 0;
      padding: .5rem 1.5rem;
      position: relative;
      overflow-x: hidden;
      line-height: 1.25rem;
      cursor: pointer;

      &::after {
        content: '';
        width: 20px;
        height: 20px;
        background-color: #fff;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        right: calc( -2rem - 25px );
        rotate: 45deg;
        transition: all .3s;
      }
      &:hover::after,
      &.active::after {
        right: -10px;
      }
    }
  }
`