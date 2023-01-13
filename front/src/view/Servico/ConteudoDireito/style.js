import styled from 'styled-components';

export const ServicoConteudoDireitoSection = styled.section`
  display: flex;
  margin-bottom: 40px;

  div:first-child {
    max-width: 300px;
    width: 100%;
    order: 0;
    img {
      max-width: 274px;
      width: 100%;
      aspect-ratio: 1/1;
    }
  }

  div:last-child {
    width: 100%;
  }

  h2 {
    font-size: ${ props => props.theme.main.fontLarge }px;
    color: ${ props => props.theme.main.colorBlue };    
  }
  
  p {
    margin-top: 10px;
    line-height: 25px;
    color: ${ props => props.theme.main.colorBlack };    
  }
  
  h3 {
    margin-top: 10px;
    font-size: 20px;
    color: ${ props => props.theme.main.colorBlack };
  }
  
  button {
    margin-top: 40px;
    padding: 9px 24px;

    background: ${ props => props.theme.main.colorBlue };
    color: #fff;

    text-transform: uppercase;
    letter-spacing: .10rem;
    font-weight: bold;

    border: none;  
    border-radius: 10px;
    
    box-shadow: 2px 2px 4px 0px rgba(61,60,60,0.5);
    -webkit-box-shadow: 2px 2px 4px 0px rgba(61,60,60,0.5);
    -moz-box-shadow: 2px 2px 4px 0px rgba(61,60,60,0.5);
  }



`;