import { StyledFooter } from './styles';
import { Logo } from '../../UI/Logo';
import * as UI from './styles';
import { Typography } from '../../UI/Typography';

export const Footer = () => {
  return (
    <StyledFooter>
      <UI.FooterContainer>
        <Logo />
        <Typography>© Barsukov Andrey</Typography>
      </UI.FooterContainer>
    </StyledFooter>
  );
};
