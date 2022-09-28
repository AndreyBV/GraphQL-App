import React from 'react';
import * as UI from './styles';

interface ITypography {
  children?: React.ReactNode;
}

export const Typography: React.FC<ITypography> = ({ children }) => {
  return <UI.StyledTypography>{children}</UI.StyledTypography>;
};
