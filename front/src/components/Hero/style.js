import styled from 'styled-components';

export const HeroDiv = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${props => props.img});
  h1 {
    font-size: ${ props => props.theme.main.headingOne }px;
  }
`;