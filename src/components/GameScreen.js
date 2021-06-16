import React from 'react';

import CommonButton from './CommonButton';
import Word from './Word';

import { gameData } from '../helpers/gameData';

import {
  StyledContainer,
  StyledQuestion,
  StyledGameBoardWrapper,
} from './styles/StyledGameScreen';

const GameScreen = () => {
  const drawnSet = gameData[Math.floor(Math.random() * gameData.length)];

  const isWordMarkedArray = drawnSet.allWords.map((word) => ({
    word,
    isMarked: false,
  }));

  const onUpdateIsWordMarkedArray = (clickedWord, isMarked) => {
    isWordMarkedArray.forEach((word) => {
      if (word.word === clickedWord) {
        word.isMarked = isMarked;
      }
    });

    console.log(isWordMarkedArray);
  };

  const wordsToRender = drawnSet.allWords.map((word, index) => (
    <Word
      word={word}
      key={index}
      updateIsWordMarkedArray={onUpdateIsWordMarkedArray}
    />
  ));

  return (
    <StyledContainer>
      <StyledQuestion>{drawnSet.question}</StyledQuestion>
      <StyledGameBoardWrapper>{wordsToRender}</StyledGameBoardWrapper>
      <CommonButton>Check Answers</CommonButton>
    </StyledContainer>
  );
};

export default GameScreen;
