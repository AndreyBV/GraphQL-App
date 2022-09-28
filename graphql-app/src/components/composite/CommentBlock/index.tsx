import { v4 } from 'uuid';
import { ListComponents } from '../../UI/ListComponents';
import { CommentInput } from '../CommentInput';
import { CommentItem } from '../CommentItem';
import * as UI from './styles';

export const CommentBlock = () => {
  return (
    <UI.StyledCommentBlock>
      <CommentInput withAvatar />
      <ListComponents>
        {[1, 2, 3, 4].map((item) => {
          return (
            <UI.CommentItemCard key={v4()}>
              <CommentItem />
            </UI.CommentItemCard>
          );
        })}
      </ListComponents>
    </UI.StyledCommentBlock>
  );
};
