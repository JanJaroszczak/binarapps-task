import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CommonButton from '../components/CommonButton';
import Word from '../components/Word';

import { gameData } from '../helpers/gameData';
import { updateWordsData, changeGameStage } from '../store/actions';

import {
  StyledContainer,
  StyledQuestion,
  StyledGameBoardWrapper,
  StyledAlert,
} from './styles/StyledGameScreen';

const GameScreen = () => {
  const [wordsLocalData, setWordsLocalData] = useState(null);
  const [isAlertOn, setIsAlertOn] = useState(false);

  const dispatch = useDispatch();

  const drawnSet = React.useMemo(
    () => gameData[Math.floor(Math.random() * gameData.length)],
    []
  );

  const wordsDataArray = drawnSet.allWords.map((word) => ({
    word,
    isMarked: false,
    isGood: drawnSet.goodWords.includes(word),
    isAnswerCorrect: null,
  }));

  useEffect(() => {
    dispatch(updateWordsData(wordsDataArray));
  }, []);

  const onUpdateWordsDataArray = (clickedWord, isMarked) => {
    if (wordsLocalData) {
      const updatedWordsData = wordsLocalData.map((word) => {
        if (word.word === clickedWord) {
          word.isMarked = isMarked;
        }
      });
      setWordsLocalData(updatedWordsData);
    }
  };

  const wordsToRender = React.useMemo(
    () =>
      drawnSet.allWords.map((word, index) => (
        <Word
          wordToRender={word}
          key={index}
          updateWordsDataArray={onUpdateWordsDataArray}
        />
      )),
    []
  );

  const wordsStoreData = useSelector(({ wordsData }) => wordsData);
  const gameStage = useSelector(({ gameStage }) => gameStage);

  const onClickHandler = () => {
    if (gameStage === 'check') dispatch(changeGameStage('finish'));
    else {
      const isAtLeastOneMarked = wordsStoreData.some((word) => word.isMarked);
      if (isAtLeastOneMarked) {
        setIsAlertOn(false);
        dispatch(changeGameStage('check'));
      } else {
        setIsAlertOn(true);
      }
    }
  };

  useEffect(() => {
    let timer;
    if (isAlertOn) {
      timer = setTimeout(() => {
        setIsAlertOn(false);
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAlertOn]);

  return (
    <StyledContainer>
      <StyledQuestion>{drawnSet.question}</StyledQuestion>
      <StyledGameBoardWrapper>
        {wordsToRender}
        {isAlertOn && (
          <StyledAlert>Please choose at least one word.</StyledAlert>
        )}
      </StyledGameBoardWrapper>
      <CommonButton clicked={onClickHandler} />
    </StyledContainer>
  );
};

export default GameScreen;
