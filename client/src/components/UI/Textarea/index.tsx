import React from 'react';
import { StyledTextarea } from './styles';

interface ITextarea {
  placeholder?: string;
}

export const Textarea: React.FC<ITextarea> = ({ placeholder }) => {
  return (
    // <ScrollbarContainer
    //   options={{
    //     scrollbars: { autoHide: 'leave' },
    //     textarea: { dynHeight: true },
    //     resize: 'vertical',
    //   }}
    // >
    <StyledTextarea placeholder={placeholder} />
    // </ScrollbarContainer>
  );
};
