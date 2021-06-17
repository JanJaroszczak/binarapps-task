import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateWordsData } from '../store/actions';

import { StyledWordButton, StyledResult } from './styles/StyledWordButton';

const WordButton = ({ wordToRender }) => {
  const [isMarked, setIsMarked] = useState(false);
  const [goodOrBadAnswer, setGoodOrBadAnswer] = useState(null);

  const dispatch = useDispatch();

  const wordsData = useSelector(({ wordsData }) => wordsData);
  const gameStage = useSelector(({ gameStage }) => gameStage);

  const onMarkHandler = () => {
    if (wordsData && gameStage === 'game') {
      const updatedWordsData = wordsData.map((word) => {
        if (word.word === wordToRender) {
          let result;

          if (word.isMarked) result = null;
          else if (word.isGood) result = 'good';
          else result = 'bad';

          return {
            ...word,
            isMarked: !isMarked,
            isAnswerCorrect: result,
          };
        } else {
          return { ...word };
        }
      });
      dispatch(updateWordsData(updatedWordsData));
      setIsMarked((prevState) => !prevState);
    }
  };

  const checkAnswers = () => {
    wordsData.forEach((word) => {
      if (word.word === wordToRender) {
        if (word.isAnswerCorrect === 'good') setGoodOrBadAnswer('Good');
        else if (word.isAnswerCorrect === 'bad') setGoodOrBadAnswer('Bad');
      }
    });
  };

  useEffect(() => {
    if (gameStage === 'check') {
      checkAnswers();
    }
  }, [gameStage]);

  return (
    <StyledWordButton
      onClick={onMarkHandler}
      isMarked={isMarked}
      goodOrBadAnswer={goodOrBadAnswer}
    >
      {wordToRender}
      <StyledResult goodOrBadAnswer={goodOrBadAnswer}>
        {goodOrBadAnswer}
      </StyledResult>
    </StyledWordButton>
  );
};

export default WordButton;
