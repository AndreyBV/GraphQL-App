import { Card } from './../../UI/Card/index';
import styled from 'styled-components';

export const StyledCommentBlock = styled(Card)`
  flex-direction: column;

  > * {
    width: 100%;
  }

  > :not(:first-child) {
    margin-top: 10px;
  }
`;
