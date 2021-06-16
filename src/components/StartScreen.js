import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import CommonButton from './CommonButton';

import { changeGameStage, setPlayerName } from '../store/actions';

import {
  StyledTitle,
  StyledForm,
  StyledInput,
} from './styles/StyledStartScreen';

const StartScreen = () => {
  const nicknameInput = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(setPlayerName(nicknameInput.current.value));
    dispatch(changeGameStage('game'));
  };

  return (
    <>
      <StyledTitle>Wordcloud game</StyledTitle>
      <StyledForm onSubmit={submitHandler}>
        <StyledInput
          type="text"
          ref={nicknameInput}
          placeholder="Enter your nickname here..."
        />
        <CommonButton type="submit" />
      </StyledForm>
    </>
  );
};

export default StartScreen;
