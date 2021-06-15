import React from 'react';

import { StyledWord } from './styles/StyledWord';

const Word = () => {
  const gridJustifySelfValues = ['start', 'center', 'end'];

  const getGridJustifySelfValue = () =>
    gridJustifySelfValues[
      Math.floor(Math.random() * gridJustifySelfValues.length)
    ];

  const getGridSpanNumber = () => Math.floor(Math.random() * 2) + 1;

  return (
    <StyledWord
      gridSpan={getGridSpanNumber()}
      gridJustifySelf={getGridJustifySelfValue()}
    >
      TEST
    </StyledWord>
  );
};

export default Word;
