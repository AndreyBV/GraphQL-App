import { CardContent } from './../Card/styles';
import { colors, shadows } from './../../../core/constants/colors';
import styled from 'styled-components';
import { Card } from '../Card';
import { Button } from '../Button';

export const BackgroundBlur = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: ${colors.white + '66'};
  backdrop-filter: blur(1.5px);
  z-index: 500;
`;

export const CloseButton = styled(Button)`
  position: absolute;
  right: 0;
  padding: auto;
  aspect-ratio: 1 / 1;
  padding: 8px;
  border-radius: 0px 6px 0px 50%;
  z-index: 515;
`;

export const StyledModalWindow = styled(Card)`
  border-radius: inherit;

  ${CardContent} {
    height: 100%;
    flex-direction: column;
  }
`;

export const ModalWindowWrapper = styled.div`
  z-index: 510;
  overflow: hidden;
  border-radius: 6px;
  max-height: 60%;
  max-width: 60%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: ${shadows.softMain};
`;
