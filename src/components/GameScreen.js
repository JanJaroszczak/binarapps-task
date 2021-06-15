import React from 'react';

import Word from './Word';

import { StyledGameBoardWrapper, StyledWord } from './styles/StyledGameScreen';

const GameScreen = () => {
  return (
    <>
      <StyledGameBoardWrapper>
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
        <Word />
      </StyledGameBoardWrapper>
    </>
  );
};

export default GameScreen;
