import styled from 'styled-components';

export const StyledWordButton = styled.button`
  position: relative;
  color: ${({ goodOrBadAnswer, isMarked }) =>
    goodOrBadAnswer === 'Good'
      ? '#8EC550'
      : goodOrBadAnswer === 'Bad'
      ? '#F45146'
      : isMarked
      ? 'gray'
      : 'black'};
  background-color: transparent;
  border: none;
  font-weight: 600;
`;

export const StyledResult = styled.span`
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  visibility: ${({ goodOrBadAnswer }) =>
    goodOrBadAnswer ? 'visible' : 'hidden'};
  color: ${({ goodOrBadAnswer }) =>
    goodOrBadAnswer === 'Good' ? '#66BA6B' : '#FC9E97'};
`;
