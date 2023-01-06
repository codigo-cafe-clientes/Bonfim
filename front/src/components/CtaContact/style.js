import styled from 'styled-components';

export const CtaContactDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${ props => props.img });
  margin-bottom: 50px;
  a {
    background: #e5803e;    
    
    padding: 9px 32px; 
    border-radius: 10px;
    border: .5px solid #fff;
    
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 600;
    color: #fff;

    position:relative;
    top:110px;
    right: 250px;
    }

    a:hover {
      background: #F28841; 
    }
  
  `;