import styled from 'styled-components';

export const SobreConteudoSection = styled.section`
    margin-bottom: 50px;


    h2 {
        font-size: ${ props => props.theme.main.fontLarge }px;
        color: ${ props => props.theme.main.colorBlue };
        margin-top: 50px;    
    }

    p {
        margin-top: 10px;
        font-size: 1.25rem;
        color: ${ props => props.theme.main.colorBlack };
    }


`;