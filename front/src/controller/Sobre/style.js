import styled from "styled-components";


export const SobreSection = styled.section`

div:nth-child(2) {   

    img {
        margin: 50px 0 100px 0;
        max-width: 797px;
        width:100%
    }
}

h2 {
    color: ${props => props.theme.main.colorBlue};
    font-size: ${props => props.theme.main.fontLarge}px;
}

p   {
    color: ${props => props.theme.main.colorBlack};
    font-size: ${props => props.theme.main.fontSize }px;
}

section:nth-child(2) {
    
    display: flex;
    flex-direction: row;
    
    p {
        margin-left: ${props => props.theme.main.fontLarge }px;
    }
    
}

`;