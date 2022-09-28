import styled from 'styled-components';
import { colors } from '../../../core/constants/colors';

interface IBlurCanvas {
  backgroundColor?: string;
}

export const BlurCanvas = styled.div<IBlurCanvas>`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  backdrop-filter: blur(1.5px);
  z-index: 500;
`;
