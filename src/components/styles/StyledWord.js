import styled from 'styled-components';

export const StyledWord = styled.div`
  grid-column-end: ${({ gridSpan }) => `span ${gridSpan}`};
  justify-self: ${({ gridJustifySelf }) => `${gridJustifySelf}`};
  align-self: ${({ gridAlignSelf }) => `${gridAlignSelf}`};
  /* text-align: center; */

  border: 1px solid black;
`;
