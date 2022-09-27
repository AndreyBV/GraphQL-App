import styled from 'styled-components';
import { colors, shadows } from '../../../core/constants/colors';
import { Container } from '../../UI/Container';
import { PictureWrapper } from '../../UI/Picture/styles';

export const StyledProductContent = styled.div`
  width: 100%;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledProductCard = styled(Container)`
  display: flex;
  align-items: center;
  flex: 1 2 auto;
  cursor: pointer;
  height: 180px;
  border-radius: 6px;
  /* height: 100px; */
  background-color: ${colors.white};
  transition: box-shadow 0.2s ease-in;

  > ${PictureWrapper} {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }

  > ${StyledProductContent} {
    width: 100%;
  }

  :hover {
    box-shadow: ${shadows.hard};
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
