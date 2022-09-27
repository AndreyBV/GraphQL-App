import React from 'react';
import { Container } from '../../UI/Container';
import { Typography } from '../../UI/Typography';

import * as UI from './styles';
import { Picture } from '../../UI/Picture';

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
