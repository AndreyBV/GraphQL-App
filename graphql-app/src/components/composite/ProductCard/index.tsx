import React from 'react';
import { Typography } from '../../UI/Typography';
import { Picture } from '../../UI/Picture';
import * as UI from './styles';

interface IProductCard {
  title: string;
  description: string;
  image?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const ProductCard: React.FC<IProductCard> = ({
  title,
  description,
  image,
  onClick,
}) => {
  return (
    <UI.StyledProductCard onClick={onClick}>
      <Picture source={image}></Picture>
      <UI.StyledProductContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </UI.StyledProductContent>
    </UI.StyledProductCard>
  );
};
