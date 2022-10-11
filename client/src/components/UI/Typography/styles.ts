import styled from 'styled-components';

// type TypographyType =
//   | 'h1'
//   | 'h2'
//   | 'h3'
//   | 'h4'
//   | 'p1'
//   | 'p2'
//   | 'caption'
//   | 'button'
//   | 'link';

type FontWight = 'bold' | 'bolder' | 'lighter' | 'normal' | '400';

// const TypographyInfo = {
//   h1: {
//     size: 40,
//     lineHeight: 48,
//     weight: 'bold',
//   },
// };

interface IStyledTypography {
  fontWight?: FontWight | number;
}

export const StyledTypography = styled.p<IStyledTypography>`
  font-weight: 500;
`;
