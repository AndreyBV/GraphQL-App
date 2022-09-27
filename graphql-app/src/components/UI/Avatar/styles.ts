import { StyledPicture } from './../Picture/styles';
import { colors } from './../../../core/constants/colors';
import styled from 'styled-components';

export const StyledAvatar = styled.div`
  display: flex;
  align-self: stretch;
  overflow: hidden;

  border: 1.5px solid ${colors.grey};

  border-radius: 6px;

  ${StyledPicture} {
    height: 50px;
    width: 100%;
  }
`;
