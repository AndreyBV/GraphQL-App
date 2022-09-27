import styled from 'styled-components';
import { colors, shadows } from '../../../core/constants/colors';
import { Card } from '../../UI/Card';
import { Container } from '../../UI/Container';
import { PictureWrapper } from '../../UI/Picture/styles';

export const StyledProductContent = styled.div`
  width: 100%;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledProductCard = styled(Card)`
  cursor: pointer;
  height: 180px;
  border-radius: 6px;
  /* height: 100px; */
  background-color: ${colors.white};
  transition: box-shadow 0.2s ease-in;

  > ${PictureWrapper} {
    width: 100%;
    flex: 1;
  }

  > ${StyledProductContent} {
    width: 100%;
    flex: 2;
  }

  :hover {
    box-shadow: ${shadows.hard};
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
