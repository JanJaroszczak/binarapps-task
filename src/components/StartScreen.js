import React, { useRef } from 'react';

const StartScreen = ({ onStartGame }) => {
  const nicknameInput = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    onStartGame(nicknameInput.current.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="nickname">Wordcloud game</label>
        <input type="text" id="nickname" ref={nicknameInput} />
        <button type="submit">Play</button>
      </form>
    </>
  );
};

export default StartScreen;
