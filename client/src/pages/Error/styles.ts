import { colors } from '../../core/constants/colors';
import styled from 'styled-components';
import { MainContent, PageLayoutWrapper } from '../../layouts/page/styles';

export const CircleWrapper = styled.div`
  height: 300px;
  width: 300px;
  border: 15px solid ${colors.red};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto auto;
`;

export const PageLayoutError = styled(PageLayoutWrapper)`
  > ${MainContent} {
    display: flex;
    align-items: center;
  }
`;
