import { ListComponents } from '../../UI/ListComponents';
import { CommentInput } from '../CommentInput';
import * as UI from './styles';

export const CommentBlock = () => {
  return (
    <UI.StyledCommentBlock>
      <CommentInput />
      <ListComponents>
        {[<div>Comment</div>, <div>Comment</div>, <div>Comment</div>]}
      </ListComponents>
    </UI.StyledCommentBlock>
  );
};
