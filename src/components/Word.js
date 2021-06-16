import React from 'react';

import WordButton from './WordButton';

import { StyledWordWrapper } from './styles/StyledWord';

const Word = ({ word, updateIsWordMarkedArray }) => {
  const gridSelfValues = ['start', 'center', 'end'];

  const getGridSelfValue = () =>
    gridSelfValues[Math.floor(Math.random() * gridSelfValues.length)];

  const getGridSpanNumber = () => Math.floor(Math.random() * 2) + 1;

  return (
    <StyledWordWrapper
      gridSpan={getGridSpanNumber()}
      gridJustifySelf={getGridSelfValue()}
      gridAlignSelf={getGridSelfValue()}
    >
      <WordButton word={word} onIsMarked={updateIsWordMarkedArray} />
    </StyledWordWrapper>
  );
};

export default Word;
