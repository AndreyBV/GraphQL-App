import React from 'react';
import { colors } from '../../../core/constants/colors';
import { BlurCanvas } from '../BlurCanvas/styles';
import * as UI from './styles';

interface IModalWindow {
  children?: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}

export const ModalWindow: React.FC<IModalWindow> = ({ children, onClose }) => {
  return (
    <div>
      <BlurCanvas backgroundColor={`${colors.white}66`} />
      <UI.ModalWindowWrapper>
        <UI.CloseButton onClick={onClose}>X</UI.CloseButton>
        <UI.StyledModalWindow>
          {/* <ScrollbarContainer
            options={{
              scrollbars: { autoHide: 'leave' },
            }}
          > */}
          {children}
          {/* </ScrollbarContainer> */}
        </UI.StyledModalWindow>
      </UI.ModalWindowWrapper>
    </div>
  );
};
