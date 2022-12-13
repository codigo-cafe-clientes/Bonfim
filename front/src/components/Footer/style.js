import styled from 'styled-components';

export const MainFooter = styled.footer`
  background-color: ${ props => props.theme.main.colorBlue };
  
  section {
    max-width: ${ props => props.theme.main.maxWidth }px;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: minmax(300px, 470px)  1fr 1fr 1fr 1fr;
  }
`;