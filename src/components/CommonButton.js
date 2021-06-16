import React from 'react';

import { StyledButton } from './styles/StyledCommonButton';

const CommonButton = ({ clicked, children }) => {
  return <StyledButton onClick={clicked}>{children}</StyledButton>;
};

export default CommonButton;
