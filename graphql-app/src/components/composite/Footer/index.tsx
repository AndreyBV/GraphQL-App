import { StyledFooter } from './styles';
import { Logo } from '../../UI/Logo';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { Container } from '../../UI/Container';
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
