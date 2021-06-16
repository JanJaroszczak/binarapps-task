import React from 'react';

import { StyledWord } from './styles/StyledWord';

const Word = () => {
  const gridSelfValues = ['start', 'center', 'end'];

  const getGridSelfValue = () =>
    gridSelfValues[Math.floor(Math.random() * gridSelfValues.length)];

  const getGridSpanNumber = () => Math.floor(Math.random() * 2) + 1;

  return (
    <StyledWord
      gridSpan={getGridSpanNumber()}
      gridJustifySelf={getGridSelfValue()}
      gridAlignSelf={getGridSelfValue()}
    >
      expansion
    </StyledWord>
  );
};

export default Word;
