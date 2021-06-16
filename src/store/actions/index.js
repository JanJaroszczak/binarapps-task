import { actionsTypes } from './actionsTypes';

export const updateWordsData = (wordsData) => ({
  type: actionsTypes.UPDATE_WORDS_DATA,
  payload: wordsData,
});

export const isAnswersCheck = (isAnswersCheckFlag) => ({
  type: actionsTypes.IS_ANSWERS_CHECK,
  payload: isAnswersCheckFlag,
});
