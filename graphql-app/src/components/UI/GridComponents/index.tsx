import React from 'react';
import * as UI from './styles';

interface IGridComponents {
  numberColumns?: number;
  children?: React.ReactNode[];
}

export const GridComponents: React.FC<IGridComponents> = ({
  numberColumns = 3,
  children,
}) => {
  return (
    <UI.StyledGridComponents
      numberColumns={numberColumns}
      numberRows={children && Math.floor(children.length / numberColumns)}
    >
      {children?.map((component) => component)}
    </UI.StyledGridComponents>
  );
};
