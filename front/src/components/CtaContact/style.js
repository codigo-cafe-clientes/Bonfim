import styled from 'styled-components';

export const CtaContactDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${ props => props.img });
  a {}
`;