import React from 'react';
import { useSelector } from 'react-redux';

import { StyledButton } from './styles/StyledCommonButton';

const CommonButton = ({ clicked, type = 'button' }) => {
  const gameStage = useSelector(({ gameStage }) => gameStage);

  return (
    <StyledButton onClick={clicked} type={type}>
      {gameStage === 'start'
        ? 'Play'
        : gameStage === 'game'
        ? 'Check Answers'
        : 'Finish Game'}
    </StyledButton>
  );
};

export default CommonButton;
