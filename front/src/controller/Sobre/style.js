import styled from "styled-components";


export const SobreSection = styled.section`

h2 {
    color: ${props => props.theme.main.colorBlue};
    font-size: ${props => props.theme.main.fontLarge}px;
}

p   {
    color: ${props => props.theme.main.colorBlack};
    font-size: ${props => props.theme.main.fontSize }px;
}

img:last-child {
    margin: 50px 0;
}


div:nth-child(2) {   
    
    img {
        margin: 50px 0 100px 0;
        max-width: 797px;
        width:100%
    }
}

section:nth-child(2) {
    
    display: flex;
    flex-direction: row;
    
    p {
        margin-left: ${props => props.theme.main.fontLarge }px;
    }
    
}

section:nth-child(3) {

    margin-top:60px;
    display:flex;    
    flex-direction: row; 
    justify-content: space-between;   
    
    div {
        // background-color: red;
    }
    
    h2 {
        margin-bottom: 20px;
    }
    
    p {
        font-size: ${props => props.theme.main.fontSize};
        width: 300px; 
        text-align: justify;
    }
}    

section:nth-child(4) {
    margin-top:60px;
    background-color: red;
    color: #fff;
}

section:nth-child(5) {    
    margin-top:60px; 
    
    h2 {
        margin-bottom:15px;         
    }
}

`;