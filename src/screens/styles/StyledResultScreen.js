import styled, { css } from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 50px;
`;

export const StyledResultScreenText = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: black;

  ${({ score }) =>
    score &&
    css`
      color: #00b3f9;
      margin: 10px 0;
    `}
`;
