import { Typography } from '../Typography';
import * as UI from './styles';
// @ts-ignore
import { ReactComponent as LogoIcon } from '../../../assets/icons/logoMain.svg';

export const Logo = () => {
  return (
    <UI.LogoWrapper href="#">
      <LogoIcon width={46} height={46} />
      <Typography>Coupon</Typography>
    </UI.LogoWrapper>
  );
};
