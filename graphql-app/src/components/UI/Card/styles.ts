import { colors } from './../../../core/constants/colors';
import styled, { css } from 'styled-components';

interface ICardContent {
  layoutDirection?: 'horizontal' | 'vertical';
}

export const CardContent = styled.div<ICardContent>`
  display: flex;
  overflow: hidden;
  margin: -5px;

  > * {
    padding: 5px;
  }

  ${({ layoutDirection }) => {
    switch (layoutDirection) {
      case 'horizontal':
        return css`
          flex-direction: row;
        `;

      case 'vertical':
        return css`
          flex-direction: column;
        `;
      default:
        break;
    }
  }}
`;

export const TitleBar = styled.div`
  display: flex;
`;

export const StyledCard = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background: ${colors.white};
  border-radius: 6px;
  padding: 15px;
  /* height: 100%; */

  > :not(:first-child) {
    margin-top: 10px;
  }
`;
