import { StyledHeader } from './styles';
import { Logo } from '../../UI/Logo';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { Container } from '../../UI/Container';
import * as UI from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <UI.HeaderContainer>
        <Logo />
        <UI.StyledSearch placeholder="Find your request" />
        <Button>Sign in</Button>
      </UI.HeaderContainer>
    </StyledHeader>
  );
};
