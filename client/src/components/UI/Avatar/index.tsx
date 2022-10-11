import { Picture } from '../Picture';
import * as UI from './styles';

interface IAvatar {}

export const Avatar: React.FC<IAvatar> = () => {
  return (
    <UI.StyledAvatar>
      <Picture />
    </UI.StyledAvatar>
  );
};
