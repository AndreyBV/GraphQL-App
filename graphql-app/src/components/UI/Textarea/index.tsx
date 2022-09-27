import React from 'react';
import { StyledTextarea } from './styles';

interface ITextarea {
  placeholder?: string;
}

export const Textarea: React.FC<ITextarea> = ({ placeholder }) => {
  return <StyledTextarea placeholder={placeholder} />;
};
