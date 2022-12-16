import styled from 'styled-components';

export const HomeSobreSection = styled.section`
  display: grid;
  grid-template-columns: minmax( 200px, 250px ) 1fr;

  img {
    max-width: 150px;
    width: 100%;
    grid-column: 1;
    grid-row: 1;
    justify-content: center;
    margin-right: 50px;
    aspect-ratio: 1/1;
  }

  h2 {
    color: ${ props => props.theme.main.colorBlack };
    font-size: ${ props => props.theme.main.fontLarge }px;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    color: ${ props => props.theme.main.colorBlack };
    font-size: ${ props => props.theme.main.fontSize }px;
  }
`;