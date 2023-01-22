import styled from 'styled-components';

export const ConteudoConsultaSection = styled.section`
    div {
        background-color: ${ props => props.theme.main.colorBlue };
        border-radius: 10px 10px 0  0;
        padding: 12px 0 11px 0;
        width: 275px;
        border: 0;
    }
    
    div:last-child {
        border: 2px solid ${ props => props.theme.main.colorBlue };
        border-top: 0;
        background: none;
        border-radius: 0  0 10px 10px;        
    }
    
    h3 {        
        padding: 0 0 0 10px;
        font-weight: 600;
        font-size: 20px;        
        color: #fff;
    }
    
    ul {
        padding: 0 0 0 10px;
        
    }
    
    li {
        list-style: none;
        padding-top: 10px;
    }
    
    a {
        text-decoration: none;
        color: ${ props => props.theme.main.colorBlack };
        font-weight: normal;

        &:hover {
            text-decoration: underline;
        }
    }

`;