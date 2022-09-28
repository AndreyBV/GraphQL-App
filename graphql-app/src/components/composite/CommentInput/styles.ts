import styled from 'styled-components';
import { StyledAvatar } from './../../UI/Avatar/styles';
import { StyledTextarea } from '../../UI/Textarea/styles';

export const StyledCommentInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  > :not(:first-child) {
    margin-left: 10px;
  }

  > ${StyledTextarea} {
    resize: vertical;
    min-height: 32px;
    max-height: 150px;
    width: 100%;
  }
`;
