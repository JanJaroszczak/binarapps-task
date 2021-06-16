import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { updateWordsData } from '../store/actions';

import { StyledWordButton } from './styles/StyledWordButton';

const WordButton = ({ wordToRender }) => {
  const [isMarked, setIsMarked] = useState(false);

  const dispatch = useDispatch();

  const wordsData = useSelector(({ wordsData }) => wordsData);
  const isAnswersCheck = useSelector(({ isAnswersCheck }) => isAnswersCheck);

  const onMarkHandler = () => {
    if (wordsData) {
      const updatedWordsData = wordsData.map((word) => {
        if (word.word === wordToRender) {
          return {
            ...word,
            isMarked: !isMarked,
          };
        } else {
          return { ...word };
        }
      });
      dispatch(updateWordsData(updatedWordsData));
      setIsMarked((prevState) => !prevState);
      console.log(updatedWordsData);
    }
  };

  useEffect(() => {
    if (isAnswersCheck) {
    }
  }, [isAnswersCheck]);

  return (
    <StyledWordButton onClick={onMarkHandler} isMarked={isMarked}>
      {wordToRender}
    </StyledWordButton>
  );
};

export default WordButton;
