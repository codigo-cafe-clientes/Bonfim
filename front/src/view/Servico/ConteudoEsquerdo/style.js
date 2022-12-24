import styled from 'styled-components';

export const ServicoConteudoEsquerdoSection = styled.section`
  display: flex;
  margin-bottom: 40px;
  div:first-child {
    max-width: 300px;
    width: 100%;
    order: 1;
    img {
      max-width: 274px;
      width: 100%;
      aspect-ratio: 1/1;
    }
  }
  div:last-child {
    width: 100%;
  }
`;