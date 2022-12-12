import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${ props => props.theme.main.fontFamily }, sans-serif;
    font-size: ${ props => props.theme.main.fontSize }px;
  }
`;

export const MainContainer = styled.main`
  max-width: ${ props => props.theme.main.maxWidth }px;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
`;