import React from 'react';

import WordButton from './WordButton';

import { StyledWordWrapper } from './styles/StyledWord';

const Word = ({ wordToRender }) => {
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
      <WordButton wordToRender={wordToRender} />
    </StyledWordWrapper>
  );
};

export default Word;
