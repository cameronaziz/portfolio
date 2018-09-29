import styled from 'styled-components';
import * as card from './card';


export const Article = styled.article`
  -moz-transform: translateY(0.25rem);
  -webkit-transform: translateY(0.25rem);
  -ms-transform: translateY(0.25rem);
  transform: translateY(0.25rem);
  -moz-transition: opacity 0.325s ease-in-out, -moz-transform 0.325s ease-in-out;
  -webkit-transition: opacity 0.325s ease-in-out, -webkit-transform 0.325s ease-in-out;
  -ms-transition: opacity 0.325s ease-in-out, -ms-transform 0.325s ease-in-out;
  transition: opacity 0.325s ease-in-out, transform 0.325s ease-in-out;
  padding: 2.5rem 2.5rem 1.5rem 2.5rem ;
  position: relative;
  width: ${props => props.width || '60rem'};
  max-width: 100%;
  background-color: rgba(27, 31, 34, 0.85);
  border-radius: 4px;
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  opacity: 1;
`;

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
  Article,
  ...card,
};
