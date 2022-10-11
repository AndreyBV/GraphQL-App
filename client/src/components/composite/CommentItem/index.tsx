import { Avatar } from '../../UI/Avatar';
import { Button } from '../../UI/Button';
import { Typography } from '../../UI/Typography';
import * as UI from './styles';

interface ICommentItem {
  withAvatar?: boolean;
}

export const CommentItem: React.FC<ICommentItem> = ({ withAvatar }) => {
  return (
    <UI.StyledCommentItem>
      <UI.CommentAuthor>
        <Avatar></Avatar>
        <UI.CommentAuthorInfo>
          <Typography>User nickname</Typography>
          <Typography>10.10.22</Typography>
        </UI.CommentAuthorInfo>
      </UI.CommentAuthor>
      <UI.CommentContent>
        <Typography>
          Comment content Comment contentComment content Comment content Comment
          content Comment content Comment content Comment content Comment
          content Comment content Comment content Comment content Comment
          content Comment content Comment content Comment content Comment
          content Comment content Comment content Comment content Comment
          content
        </Typography>
      </UI.CommentContent>
      <UI.CommentUtils>
        <Button>Reply</Button>
      </UI.CommentUtils>
    </UI.StyledCommentItem>
  );
};
