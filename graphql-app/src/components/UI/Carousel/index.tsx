import React from 'react';
import { ListComponents } from '../ListComponents';
import * as UI from './styles';

interface ICarousel {
  data?: React.ReactNode[];
  direction?: 'horizontal' | 'vertical';
}

export const Carousel: React.FC<ICarousel> = ({ data, direction }) => {
  return (
    <UI.StyledCarousel>
      <ListComponents direction={direction}>{data}</ListComponents>
    </UI.StyledCarousel>
  );
};
