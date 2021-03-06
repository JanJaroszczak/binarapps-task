import { actionsTypes } from './actionsTypes';

export const updateWordsData = (wordsData) => ({
  type: actionsTypes.UPDATE_WORDS_DATA,
  payload: wordsData,
});

export const changeGameStage = (gameStage) => ({
  type: actionsTypes.CHANGE_GAME_STAGE,
  payload: gameStage,
});

export const setPlayerName = (name) => ({
  type: actionsTypes.SET_PLAYER_NAME,
  payload: name,
});
