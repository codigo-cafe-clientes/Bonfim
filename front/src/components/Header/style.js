import styled from 'styled-components';

export const MainHeader = styled.header`
  max-width: ${ props => props.theme.main.maxWidth }px;
  width: 100%;
  padding: 0px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: minmax(200px, 400px) 1fr;
  align-items: center;
  gap: 0 30px;

  img {
    max-width: 170px;
    width: 100%;
  }
  
  nav {
    margin: 0;
    padding: 0;

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: space-around;
      align-items: center;

      li {
        margin: 0;
        padding: 0;
        display: block;

        a {
          text-decoration: none;
          text-transform: uppercase;
          font-size: 1rem;
          color: ${ props => props.theme.main.colorBlack };
          display: block;
          line-height: 2rem;
          padding: 0 8px;
          position: relative;
          font-weight: 400;
          transition: all .3s;

          &::after {
            content: '';
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${ props => props.theme.main.colorBlue };
            height: 3px;
            width: 0%;
            transition: all .4s;
          }

          &:hover {
            color: ${ props => props.theme.main.colorBlue };

            &::after {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;