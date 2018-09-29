import styled from 'styled-components';
import * as card from './card';

export const CardBackground = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  opacity: 0.5;
  z-index: -1;
`;


export default {
  ...card,
};
