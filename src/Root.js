import React, { useState } from 'react';

import GameScreen from './components/GameScreen';
import GlobalStyle from './globalStyles/GlobalStyle';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';

const Root = () => {
  const [gameStage, setGameStage] = useState('start');
  const [enteredNickname, setEnteredNickname] = useState('');
  const [gameResult, setGameResult] = useState(null);

  const goToGameScreen = (enteredNickname) => {
    setEnteredNickname(enteredNickname);
    setGameStage('game');
  };

  return (
    <>
      <GlobalStyle />
      {/* {gameStage === 'start' ? (
        <StartScreen onStartGame={goToGameScreen} />
      ) : gameStage === 'game' ? (
        <GameScreen/>
      ) : (
        <ResultScreen enteredNickname={enteredNickname} />
      )} */}
      <GameScreen enteredNickname={enteredNickname} />
    </>
  );
};

export default Root;
