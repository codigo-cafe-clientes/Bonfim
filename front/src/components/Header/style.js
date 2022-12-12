import styled from 'styled-components';

export const MainHeader = styled.header`
  width: 100%;
  padding: 0px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    margin: 0;
    padding: 0;

    ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
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