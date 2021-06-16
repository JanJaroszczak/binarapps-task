import React, { useEffect, useState } from 'react';

import { StyledWordButton } from './styles/StyledWordButton';

const WordButton = ({ word, onIsMarked }) => {
  const [isMarked, setIsMarked] = useState(false);

  useEffect(() => {
    onIsMarked(word, isMarked);
  }, [isMarked]);

  return (
    <StyledWordButton
      onClick={() => setIsMarked((prevState) => !prevState)}
      isMarked={isMarked}
    >
      {word}
    </StyledWordButton>
  );
};

export default WordButton;
