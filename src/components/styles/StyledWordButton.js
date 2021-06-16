import styled from 'styled-components';

export const StyledWordButton = styled.button`
  color: ${({ isMarked }) => (isMarked ? 'gray' : 'black')};
  background-color: transparent;
  border: none;
`;
