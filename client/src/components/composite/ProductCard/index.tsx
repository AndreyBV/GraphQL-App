import React from 'react';
import { Typography } from '../../UI/Typography';
import * as UI from './styles';

interface IProductCard {
  title: string;
  description: string;
  layoutDirection?: 'horizontal' | 'vertical';
  image?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ProductCard: React.FC<IProductCard> = ({
  title,
  description,
  layoutDirection,
  image,
  onClick,
}) => {
  return (
    <UI.StyledProductCard onClick={onClick} layoutDirection={layoutDirection}>
      <UI.ProductPicture source={image}></UI.ProductPicture>
      <UI.StyledProductContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </UI.StyledProductContent>
    </UI.StyledProductCard>
  );
};
