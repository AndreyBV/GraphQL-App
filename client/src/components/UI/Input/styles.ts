import { colors } from './../../../core/constants/colors';
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  border: 1.5px solid ${colors.grey};

  padding: 10px 25px;
  border-radius: 6px;

  transition: border 0.2s ease-in;

  :focus:not(:disabled) {
    border: 1.5px solid ${colors.primary};
  }

  :disabled {
    background-color: ${colors.grey};
  }
`;
