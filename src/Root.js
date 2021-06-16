import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GameScreen from './screens/GameScreen';
import GlobalStyle from './globalStyles/GlobalStyle';
import ResultScreen from './screens/ResultScreen';
import StartScreen from './screens/StartScreen';

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
      {gameStage === 'start' ? (
        <StartScreen />
      ) : gameStage === 'game' || gameStage === 'check' ? (
        <GameScreen />
      ) : (
        <ResultScreen />
      )}
      {/* <GameScreen /> */}
    </>
  );
};

export default Root;
