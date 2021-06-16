import React from 'react';

import Word from './Word';

import { gameData } from '../helpers/gameData';

import {
  StyledQuestion,
  StyledGameBoardWrapper,
} from './styles/StyledGameScreen';

const GameScreen = () => {
  const drawnSet = gameData[Math.floor(Math.random() * gameData.length)];

  const wordsToRender = drawnSet.allWords.map((word) => <Word word={word} />);

  return (
    <>
      <StyledQuestion>{drawnSet.question}</StyledQuestion>
      <StyledGameBoardWrapper>{wordsToRender}</StyledGameBoardWrapper>
    </>
  );
};

export default GameScreen;
