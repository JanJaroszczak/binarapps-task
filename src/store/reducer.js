import { actionsTypes } from './actions/actionsTypes';

const intitialState = {
  wordsData: null,
  gameStage: 'start',
};

const reducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.UPDATE_WORDS_DATA:
      return {
        ...state,
        wordsData: payload,
      };

    case actionsTypes.CHANGE_GAME_STAGE:
      return {
        ...state,
        gameStage: payload,
      };

    default:
      return state;
  }
};

export default reducer;
