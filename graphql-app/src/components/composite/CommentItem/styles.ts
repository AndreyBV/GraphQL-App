import styled from 'styled-components';
import { StyledTextarea } from '../../UI/Textarea/styles';

export const CommentAuthorInfo = styled.div`
  > :not(:first-child) {
    margin-top: 5px;
  }
`;

export const CommentAuthor = styled.div`
  display: flex;
  align-items: center;

  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const CommentContent = styled.div``;

export const CommentUtils = styled.div`
  display: flex;
  justify-content: end;

  > :not(:first-child) {
    margin-left: 10px;
  }
`;

export const StyledCommentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: -5px;

  > * {
    padding: 5px;
  }
`;
