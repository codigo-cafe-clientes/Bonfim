import { createGlobalStyle } from 'styled-components';

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

export const theme = {
  'main': {
    'fontSize'    : 16,
    'fontSmall'   : 12,
    'fontLarge'   : 32,
    'fontFamily'  : 'Open Sans',
    'headingOne'  : 60,
    'headingTwo'  : 30,
    'colorBlack'  : '#3D3C3C',
    'colorBlue'   : '#4273B2',
    'colorOrange' : '#E5803E',
    'colorGrey'   : '#3D3C3C',
    'maxWidth'    : '1170'
  }
};