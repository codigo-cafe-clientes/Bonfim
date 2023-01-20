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
      padding: 15px 0 10px 0;
      line-height: 2rem;
      display: block;
      box-sizing: border-box;
    }
    

    input, textarea {
      border: 2px solid #d9d9d9 !important;
      border-radius: 5px;          
      display:block; 
    }

    input {
      padding: 12px 18px;
      font-weight:600;
      width: 600px;
      height: 50px;                
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
    
    button[ type="reset" ] {      
      color: #E5803E;
      text-transform: capitalize;
      letter-spacing: .10rem;
      border-radius: 0;      
      background-color: #fff;      
    }
    
    button[ type="reset" ]:hover {
      border-bottom: 2px solid #E5803E;      
    }

    
`;