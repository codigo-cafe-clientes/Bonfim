import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: ${ props => props.theme.main.maxWidth }px;
  width: 100%;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
`;