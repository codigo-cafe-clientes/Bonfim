import styled from 'styled-components';

export const ContatoFormularioSection = styled.section`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-top: 100px;
    margin-bottom: 50px;
    
    
    label {
      color: #3D3C3C;
      font-weight:600;
      font-size: 1.125rem;      
    }
    
    input {
      padding: 12px 18px;
      font-weight:600;
      width: 600px;
      height: 50px;            
      margin-bottom: 34px;      
    }


    input, textarea {
      border: 1px solid #d9d9d9;
      border-radius: 05px;      
    }
    
    textarea {
      padding: 12px 18px;
      width: 600px;
      height: 400px;      
    }
    
    button {
      // padding: 15px 167px;
      width: 400px;
      height: 55px;
      
      background-color: #E5803E;
      
      color: #fff;
      font-size: 18px;
      text-transform: uppercase;
      letter-spacing: .1rem;
      
      border-radius: 10px;
      border: none;
      
      margin-top: 30px;
      position: relative;
      left: 90px;
      
      cursor: pointer;
      font-weight:600;
    }
    
    button:hover {
      background-color: #f28841;      
    }
    
    button:last-child {      
      color: #E5803E;
      text-transform: capitalize;
      letter-spacing: .10rem;
      border-radius: 0;      
      background-color: #fff;      
    }
    
    button:last-child:hover {
      border-bottom: 2px solid #E5803E;      
    }

    
`;