import { StyledTypography } from './../Typography/styles';
import styled from 'styled-components';

export const LogoStyled = styled.image`
  width: 46px;
  height: 46px;
  background-image: '../../../assets/icons/logoMain';
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;

  ${StyledTypography} {
    text-transform: uppercase;
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
