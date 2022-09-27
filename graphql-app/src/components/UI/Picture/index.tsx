import React from 'react';
// @ts-ignore
import productPlugImg from '../../../assets/images/product-plug.jpg';
import * as UI from './styles';

interface IPicture {
  source?: string;
  alt?: string;
}

export const Picture: React.FC<IPicture> = ({ source, alt }) => {
  return (
    <UI.PictureWrapper>
      <UI.StyledPicture
        src={source || productPlugImg}
        alt={alt || 'image'}
      ></UI.StyledPicture>
    </UI.PictureWrapper>
  );
};
