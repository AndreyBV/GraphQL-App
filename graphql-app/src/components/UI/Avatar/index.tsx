import { Picture } from '../Picture';
import * as UI from './styles';

interface IAvatar {}

export const Avatar = () => {
  return (
    <UI.StyledAvatar>
      <Picture />
    </UI.StyledAvatar>
  );
};
