import { Avatar } from '../../UI/Avatar';
import { Input } from '../../UI/Input';
import { ListComponents } from '../../UI/ListComponents';
import { Textarea } from '../../UI/Textarea';
import * as UI from './styles';

interface ICommentInput {
  withAvatar?: boolean;
}

export const CommentInput: React.FC<ICommentInput> = ({ withAvatar }) => {
  return (
    <UI.StyledCommentInput>
      {withAvatar && <Avatar />}
      <Textarea placeholder="Your comment... " />
    </UI.StyledCommentInput>
  );
};
