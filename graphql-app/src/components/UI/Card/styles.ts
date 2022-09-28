import { colors } from './../../../core/constants/colors';
import styled from 'styled-components';

export const CardContent = styled.div`
  display: flex;
  margin: -5px;

  > * {
    padding: 5px;
  }

  /* > :not(:first-child) {
    margin-top: 10px;
    margin-left: 10px;
  } */
`;

export const TitleBar = styled.div`
  display: flex;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: ${colors.white};
  border-radius: 6px;
  padding: 15px;

  > :not(:first-child) {
    margin-top: 10px;
  }
`;
