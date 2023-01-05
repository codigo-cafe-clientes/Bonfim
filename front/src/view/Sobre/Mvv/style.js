import styled from 'styled-components';


export const SobreMvvSection = styled.section`
  display:flex;
  justify-content: space-between;
  margin: 60px 0 90px 0;  

  div{
      max-width: 300px;
      width:100%;
    }  

  h2 {
    font-size: ${ props => props.theme.main.fontLarge }px;
    color: ${ props => props.theme.main.colorBlue };
    text-align: center;
}

p {
    line-height: 1.7rem
    color: ${ props => props.theme.main.colorBlack };
  }
`;