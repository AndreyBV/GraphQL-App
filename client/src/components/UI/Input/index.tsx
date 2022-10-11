import React from 'react';
import { StyledInput } from './styles';

interface IInput {
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};
