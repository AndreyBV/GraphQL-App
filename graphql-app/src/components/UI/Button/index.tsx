import React from 'react';
import { Typography } from '../Typography';
import { StyledButton } from './styles';

interface IButton {
  icon?: React.ReactNode;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<IButton> = ({
  icon,
  disabled,
  children,
  className,
  onClick,
}) => {
  return (
    <StyledButton disabled={disabled} className={className} onClick={onClick}>
      {icon}
      <Typography>{children}</Typography>
    </StyledButton>
  );
};
