import styled from 'styled-components';

export const StyledWordWrapper = styled.div`
  grid-column-end: ${({ gridSpan }) => `span ${gridSpan}`};
  justify-self: ${({ gridJustifySelf }) => `${gridJustifySelf}`};
  align-self: ${({ gridAlignSelf }) => `${gridAlignSelf}`};
  font-size: 1.5rem;

  /* border: 1px solid black; */

  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;
