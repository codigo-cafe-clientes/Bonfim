import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.img});
  div {
    max-width: ${ props => props.theme.main.maxWidth }px;
    width: 100%;
    h1 {
      font-size: ${ props => props.theme.main.headingOne }px;
    }
  }
`;