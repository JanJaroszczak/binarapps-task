import React from 'react';

import { StyledButton } from './styles/StyledCommonButton';

const CommonButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default CommonButton;
