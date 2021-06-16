import styled from 'styled-components';

export const StyledWord = styled.div`
  grid-column-end: ${({ gridSpan }) => `span ${gridSpan}`};
  justify-self: ${({ gridJustifySelf }) => `${gridJustifySelf}`};
  align-self: ${({ gridAlignSelf }) => `${gridAlignSelf}`};
  font-size: 1.5rem;
  /* text-align: center; */

  border: 1px solid black;

  @media (max-width: 330px) {
    font-size: 1.2rem;
  }
`;
