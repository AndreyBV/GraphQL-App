import styled from 'styled-components';
// import logoMainIcon from '../../../assets/icons/logo_main';
import { colors } from '../../../core/constants/colors';
import { Container } from '../../UI/Container';
import { LogoWrapper } from '../../UI/Logo/styles';

export const Logo = styled.div`
  display: block;

  width: 64px;
  height: 32px;
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledFooter = styled.div`
  background-color: ${colors.white};
  display: flex;

  min-height: 80px;

  > ${LogoWrapper} {
    margin: 40px 0px;
  }
`;
