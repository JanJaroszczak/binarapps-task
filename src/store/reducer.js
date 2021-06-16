import { actionsTypes } from './actions/actionsTypes';

const intitialState = {
  wordsData: null,
  isAnswersCheck: false,
};

const reducer = (state = intitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionsTypes.UPDATE_WORDS_DATA:
      return {
        ...state,
        wordsData: payload,
      };

    case actionsTypes.IS_ANSWERS_CHECK:
      return {
        ...state,
        isAnswersCheck: payload,
      };

    default:
      return state;
  }
};

export default reducer;
