import styled, { css } from 'styled-components';

interface IStyledListComponents {
  direction?: 'horizontal' | 'vertical';
}

export const StyledListComponents = styled.div<IStyledListComponents>`
  display: flex;

  ${({ direction }) => {
    switch (direction) {
      case 'horizontal':
        return css`
          flex-direction: row;

          > :not(:first-child) {
            margin-left: 10px;
          }
        `;

      case 'vertical':
      default:
        return css`
          flex-direction: column;

          > :not(:first-child) {
            margin-top: 10px;
          }
        `;
    }
  }}
`;
