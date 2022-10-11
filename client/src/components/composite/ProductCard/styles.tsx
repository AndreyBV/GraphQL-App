import styled from 'styled-components';
import { colors, shadows } from '../../../core/constants/colors';
import { Card } from '../../UI/Card';
import { CardContent } from '../../UI/Card/styles';
import { Picture } from '../../UI/Picture';

export const ProductPicture = styled(Picture)`
  border-radius: 6px;
`;

export const StyledProductContent = styled.div`
  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledProductCard = styled(Card)`
  cursor: pointer;
  height: 180px;
  border-radius: 6px;
  background-color: ${colors.white};
  transition: box-shadow 0.2s ease-in;

  > ${CardContent} {
    /* height: 170px; */

    > ${ProductPicture} {
      flex: 1;
    }

    > ${StyledProductContent} {
      flex: 2;
    }
  }

  :hover {
    box-shadow: ${shadows.hard};
  }
`;
