import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GameScreen from './components/GameScreen';
import GlobalStyle from './globalStyles/GlobalStyle';
import ResultScreen from './components/ResultScreen';
import StartScreen from './components/StartScreen';

const Root = () => {
  // const [gameStage, setGameStage] = useState('start');
  // const [enteredNickname, setEnteredNickname] = useState('');
  // const [gameResult, setGameResult] = useState(null);

  const gameStage = useSelector(({ gameStage }) => gameStage);

  // const goToGameScreen = (enteredNickname) => {
  //   setEnteredNickname(enteredNickname);
  //   setGameStage('game');
  // };

  return (
    <>
      <GlobalStyle />
      {/* {gameStage === 'start' ? (
        <StartScreen />
      ) : gameStage === 'game' || gameStage === 'check' ? (
        <GameScreen />
      ) : (
        <ResultScreen />
      )} */}
      <GameScreen />
    </>
  );
};

export default Root;
