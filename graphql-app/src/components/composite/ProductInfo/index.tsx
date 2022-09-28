import React from 'react';
import { Carousel } from '../../UI/Carousel';
import { Picture } from '../../UI/Picture';
import { Typography } from '../../UI/Typography';
import * as UI from './styles';

interface IProductInfo {}

export const ProductInfo: React.FC<IProductInfo> = ({}) => {
  return (
    <UI.StyledProductInfo>
      <UI.ProductPictures>
        <Picture />
        <Carousel
          layoutDirection="horizontal"
          data={[1, 2, 3, 4, 5].map((t) => (
            <Picture />
          ))}
        />
      </UI.ProductPictures>
      <UI.ProductMainInfo>
        <Typography>Product name</Typography>
        <Typography>
          Product name Product nameProduct nameProduct nameProduct nameProduct
          name Product nameProduct nameProduct nameProduct name Product
          nameProduct name Product name Product name Product nameProduct
          nameProduct nameProduct name
        </Typography>
      </UI.ProductMainInfo>
    </UI.StyledProductInfo>
  );
};
