import React from 'react';
// @ts-ignore
import productPlugImg from '../../../assets/images/product-plug.jpg';
import * as UI from './styles';

interface IPicture {
  source?: string;
  alt?: string;
  className?: string;
}

export const Picture: React.FC<IPicture> = ({ source, alt, className }) => {
  return (
    <UI.PictureWrapper className={className}>
      <UI.StyledPicture
        src={source || productPlugImg}
        alt={alt || 'image'}
      ></UI.StyledPicture>
    </UI.PictureWrapper>
  );
};
