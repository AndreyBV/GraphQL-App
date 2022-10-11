import styled from 'styled-components';
// import logoMainIcon from '../../../assets/icons/logo_main';
import { colors } from '../../../core/constants/colors';
import { Container } from '../../UI/Container';
import { StyledInput } from '../../UI/Input/styles';
import { LogoWrapper } from '../../UI/Logo/styles';

export const StyledSearch = styled(StyledInput)``;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  > ${StyledSearch} {
    width: 35%;
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const StyledHeader = styled.div`
  background-color: ${colors.white};
  display: flex;
  min-height: 80px;

  > ${LogoWrapper} {
    margin: 40px 0px;
  }
`;
