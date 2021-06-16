import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CommonButton from '../components/CommonButton';

import { changeGameStage, setPlayerName } from '../store/actions';

import {
  StyledTitle,
  StyledForm,
  StyledInput,
  StyledAlert,
} from './styles/StyledStartScreen';

const StartScreen = () => {
  const [isAlertOn, setIsAlertOn] = useState(false);

  const nicknameInput = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (nicknameInput.current.value === '') {
      setIsAlertOn(true);
    } else {
      dispatch(setPlayerName(nicknameInput.current.value));
      dispatch(changeGameStage('game'));
    }
  };

  useEffect(() => {
    let timer;
    if (isAlertOn) {
      timer = setTimeout(() => {
        setIsAlertOn(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAlertOn]);

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
        {isAlertOn && <StyledAlert>Please enter your nickname.</StyledAlert>}
      </StyledForm>
    </>
  );
};

export default StartScreen;
