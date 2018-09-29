import styled from 'styled-components';

export const Card = styled.div`
  display: inline-block;
  background: ${props => props.bg};
  margin: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  width: calc(50% - 20px);
`;