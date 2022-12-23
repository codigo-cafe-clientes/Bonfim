import styled from "styled-components";

export const ContatoSection = styled.section`
    
    iframe {
        max-width: 582px;
        width: 100%;
        height: 748px;
        border: 0;
    }    
    
    span {
        font-size: ${props => props.theme.main.headingOne}px;
        font-weight: 600;
        color: #fff;
        position: relative;
        bottom: 200px; 
        left: 100px;
    }

    form {
        max-width: 610px;
        width: 100%;
        height: 950px;
        padding-left: 15px;        
    }
    
    input, select, textarea {
        max-width: 580px;
        width: 100%;
        height: 50px;
        
        border: 1px solid #d9d9d9;
        border-radius: 5px;
        
        padding-left: ${props => props.theme.main.fontSmall}px;
        margin-bottom: ${props => props.theme.main.headingTwo}px;
    }

    input:focus {
        outline: none;
        border: 2px solid ${props => props.theme.main.colorOrange};
    }
    
    textarea:focus {
        outline: none;
        border: 2px solid ${props => props.theme.main.colorOrange};
    }

    select:focus {
        outline: none;
        border: 2px solid ${props => props.theme.main.colorOrange};

    }
    
    textarea {
        height: 400px;
        padding-top: 10px;        
    }
    
    select {
        background: #fff;
    } 
    
    button {
        max-width: 400px;
        width: 100%;
        height: 55px;

        background-color: ${props => props.theme.main.colorOrange};
        color: #fff;

        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        
        border: none;
        border-radius: 10px;
        cursor: pointer;
        
        margin-right: auto;
        margin-left: auto;        
    }
    
    button:last-child {
        text-transform: capitalize;
        background: none;
        font-size: ${props => props.theme.main.fontSize}px;
        color: ${props => props.theme.main.colorOrange};                
    }
    
    button:last-child:hover {
        text-decoration: underline ${props => props.theme.main.colorOrange} 1px;
    }

    section:last-child {
        display: flex;             
        
        label {
            color: ${props => props.theme.main.colorGrey};
            font-size: ${props => props.theme.main.fontSize}px;
            font-weight: 600;
            margin-bottom: 10px;
        }

        div {
            display: flex;
            flex-direction: column;
        }
        
        
    }


`;