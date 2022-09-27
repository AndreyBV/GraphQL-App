import { Avatar } from '../../UI/Avatar';
import { Input } from '../../UI/Input';
import { ListComponents } from '../../UI/ListComponents';
import { Textarea } from '../../UI/Textarea';
import * as UI from './styles';

export const CommentInput = () => {
  return (
    <UI.StyledCommentInput>
      <Avatar />
      <Textarea placeholder="Your comment... " />
    </UI.StyledCommentInput>
  );
};
