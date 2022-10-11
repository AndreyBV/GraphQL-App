import React from 'react';
import { ListComponents } from '../ListComponents';
import * as UI from './styles';

interface ICarousel {
  data?: React.ReactNode[];
  layoutDirection?: 'horizontal' | 'vertical';
}

export const Carousel: React.FC<ICarousel> = ({ data, layoutDirection }) => {
  return (
    <UI.StyledCarousel>
      <ListComponents layoutDirection={layoutDirection}>{data}</ListComponents>
    </UI.StyledCarousel>
  );
};
