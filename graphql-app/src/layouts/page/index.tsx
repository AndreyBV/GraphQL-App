import React from 'react';
import { Footer } from '../../components/composite/Footer';
import { Header } from '../../components/composite/Header';
import { Container } from '../../components/UI/Container';
import { ModalWindow } from '../../components/UI/ModalWindow';
import { ScrollbarContainer } from '../../components/UI/ScrollbarContainer/styles';

import * as UI from './styles';

interface IPageLayout {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return (
    <ScrollbarContainer
      options={{
        scrollbars: { autoHide: 'leave' },
      }}
    >
      {/* <ModalWindow>
        <UI.MainContent>
          <Container>{children}</Container>
        </UI.MainContent>
      </ModalWindow> */}

      <UI.PageLayoutWrapper>
        <Header />
        <UI.MainContent>
          <Container>{children}</Container>
        </UI.MainContent>
        <Footer />
      </UI.PageLayoutWrapper>
    </ScrollbarContainer>
  );
};
