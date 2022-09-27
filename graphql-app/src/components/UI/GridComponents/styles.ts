import styled, { css } from 'styled-components';

interface IStyledGridComponents {
  numberColumns?: number;
  numberRows?: number;
}

export const StyledGridComponents = styled.div<IStyledGridComponents>`
  display: grid;
  grid-gap: 10px;
  ${({ numberColumns, numberRows }) =>
    css`
      grid-template: repeat(${numberRows}, 1fr) / repeat(${numberColumns}, 1fr);
    `}

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
