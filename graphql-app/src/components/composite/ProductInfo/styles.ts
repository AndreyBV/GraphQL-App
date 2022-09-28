import styled from 'styled-components';
import { Card } from '../../UI/Card';

export const ProductMainInfo = styled.div`
  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const ProductPictures = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;

export const StyledProductInfo = styled(Card)`
  flex-direction: row;
  ${ProductPictures} {
    flex: 1;
  }
  ${ProductMainInfo} {
    flex: 2;
  }

  > :not(:first-child) {
    margin-left: 10px;
  }
`;
