import React from 'react';
import { Typography } from '../Typography';
import { StyledButton } from './styles';

interface IButton {
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<IButton> = ({ icon, disabled, children }) => {
  return (
    <StyledButton disabled={disabled}>
      {icon}
      <Typography>{children}</Typography>
    </StyledButton>
  );
};
