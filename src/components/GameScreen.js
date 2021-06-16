import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CommonButton from './CommonButton';
import Word from './Word';

import { updateWordsData, changeGameStage } from '../store/actions';

import { gameData } from '../helpers/gameData';

import {
  StyledContainer,
  StyledQuestion,
  StyledGameBoardWrapper,
} from './styles/StyledGameScreen';

const GameScreen = () => {
  const [wordsData, setWordsData] = useState(null);

  const dispatch = useDispatch();

  const drawnSet = gameData[Math.floor(Math.random() * gameData.length)];

  const wordsDataArray = drawnSet.allWords.map((word) => ({
    word,
    isMarked: false,
    isGood: drawnSet.goodWords.includes(word),
    isAnswerCorrect: null,
  }));

  useEffect(() => {
    console.log('render');
    dispatch(updateWordsData(wordsDataArray));
  }, []);

  const onUpdateWordsDataArray = (clickedWord, isMarked) => {
    if (wordsData) {
      const updatedWordsData = wordsData.map((word) => {
        if (word.word === clickedWord) {
          word.isMarked = isMarked;
        }
      });
      setWordsData(updatedWordsData);
      console.log(wordsDataArray);
    }
  };

  const wordsToRender = drawnSet.allWords.map((word, index) => (
    <Word
      wordToRender={word}
      key={index}
      updateWordsDataArray={onUpdateWordsDataArray}
    />
  ));

  const checkAnswers = () => {
    dispatch(changeGameStage('check'));
  };

  return (
    <StyledContainer>
      <StyledQuestion>{drawnSet.question}</StyledQuestion>
      <StyledGameBoardWrapper>{wordsToRender}</StyledGameBoardWrapper>
      <CommonButton clicked={checkAnswers}>Check Answers</CommonButton>
    </StyledContainer>
  );
};

export default GameScreen;
