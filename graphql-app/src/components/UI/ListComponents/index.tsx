import React from 'react';
import { Typography } from '../Typography';
import * as UI from './styles';

interface IListComponents {
  direction?: 'horizontal' | 'vertical';
  emptyMessage?: string;
  children?: React.ReactNode[];
}

export const ListComponents: React.FC<IListComponents> = ({
  direction = 'vertical',
  emptyMessage,
  children,
}) => {
  return children?.length ? (
    <UI.StyledListComponents direction={direction}>
      {children?.map((component) => component)}
    </UI.StyledListComponents>
  ) : emptyMessage ? (
    <Typography>{emptyMessage}</Typography>
  ) : null;
};
