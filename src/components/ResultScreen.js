import React from 'react';
import { useSelector } from 'react-redux';

import {
  StyledWrapper,
  StyledResultScreenText,
} from './styles/StyledResultScreen';

const ResultScreen = () => {
  const wordsData = useSelector(({ wordsData }) => wordsData);
  const playerName = useSelector(({ playerName }) => playerName);

  let finalScore = 0;

  wordsData.forEach((word) => {
    if (word.isAnswerCorrect === 'good') finalScore = finalScore + 2;
    else if (word.isAnswerCorrect === 'bad') finalScore = finalScore - 1;
    else if (word.isGood && !word.isMarked) finalScore = finalScore - 1;
  });

  return (
    <StyledWrapper>
      <StyledResultScreenText>{`${
        finalScore > 0 ? 'Congratulations' : 'The end'
      }, ${playerName}!`}</StyledResultScreenText>
      <StyledResultScreenText>Your score:</StyledResultScreenText>
      <StyledResultScreenText score>{finalScore}</StyledResultScreenText>
    </StyledWrapper>
  );
};

export default ResultScreen;
