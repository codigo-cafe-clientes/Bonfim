import styled from 'styled-components';

export const MainFooter = styled.footer`
  background-color: ${ props => props.theme.main.colorBlue };
  padding: 2rem 0;
  
  section {
    max-width: ${ props => props.theme.main.maxWidth }px;
    width: 100%;
    margin: auto;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: minmax(300px, 470px)  1fr 1fr 1fr 1fr;
    
    div:first-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      img {
        display: block;
        max-width: 180px;
        width: 100%;
      }
    }
  
    h3,p,a {
      color: #fff;
      text-decoration: none;
    }
    p,a {
      font-size: ${ props => props.theme.main.fontSmall }px;
    }
    h3 {
      font-size: ${ props => props.theme.main.fontSize }px;
      margin: 0 0 1rem 0;
      padding: 0;
    }
    a {
      &:hover {
        text-decoration: underline;
      }
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      
      li {
        margin: 0;
        padding: 0;
      }
      
      &:last-child {
        li {
          a {
            margin: 0 5px;
          }
        }
      }
    }
  }

  section:last-child {
    margin-top: 2rem;
    text-align: center;
    display: block;
  }
`;