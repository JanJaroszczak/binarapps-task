import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GameScreen from './screens/GameScreen';
import GlobalStyle from './globalStyles/GlobalStyle';
import ResultScreen from './screens/ResultScreen';
import StartScreen from './screens/StartScreen';

const Root = () => {
  const gameStage = useSelector(({ gameStage }) => gameStage);

  return (
    <>
      <GlobalStyle />
      {gameStage === 'start' ? (
        <StartScreen />
      ) : gameStage === 'game' || gameStage === 'check' ? (
        <GameScreen />
      ) : (
        <ResultScreen />
      )}
    </>
  );
};

export default Root;
