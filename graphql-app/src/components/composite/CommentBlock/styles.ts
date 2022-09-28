import { StyledAvatar } from './../../UI/Avatar/styles';
import { StyledCommentInput } from './../CommentInput/styles';
import { CardContent } from './../../UI/Card/styles';
import { colors } from './../../../core/constants/colors';
import { Card } from '../../UI/Card';
import styled from 'styled-components';

export const CommentItemCard = styled(Card)`
  background-color: ${colors.tertiary};

  ${CardContent} {
    flex-direction: column;
  }
`;

export const StyledCommentBlock = styled(Card)`
  ${CardContent} {
    flex-direction: column;
  }
`;
