import styled from "styled-components";

export const ServicosSection = styled.section`


span {
    font-size: ${props => props.theme.main.headingOne}px;
    font-weight: 600;
    color: #fff;
    position: relative;
    bottom: 200px; 
    left: 100px;
}

h2 {
    margin-bottom: ${props => props.theme.main.headingTwo}px;
    color: ${props => props.theme.main.colorBlue};
    font-size: ${props => props.theme.main.fontLarge}px;
}

h3 {
    margin-top: 15px;
}

p   {
    color: ${props => props.theme.main.colorBlack};
    font-size: ${props => props.theme.main.fontSize }px;
}

li {
    list-style-position: inside;
    margin-top: 10px
}

button {
    max-width: 150px;
    width:100%;
    background-color: ${props => props.theme.main.colorBlue};
    color: #fff;
    padding: 9px 24px;
    border-radius: 10px;
    border: none;    
    text-transform: uppercase;
    box-shadow: 5px 5px 7px -7px rgba(145,145,145,1);
    margin-top: 40px;    
}




section {
    
    div {
        margin-top: 50px;        
        display: flex;
        flex-direction: row; 
    }
    
    
    div:nth-child(2) {
        margin-left: 35px;
        display:flex;        
        flex-direction: column;         
    }    
    
    
}

img:last-child {
    // margin: 50px 0;
}






`;