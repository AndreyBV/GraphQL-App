import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import { Footer } from '../../components/composite/Footer';
import { Header } from '../../components/composite/Header';
import { Container } from '../../components/UI/Container';

import * as UI from './styles';

interface IPageLayout {
  children?: React.ReactNode;
}

export const PageLayout: React.FC<IPageLayout> = ({ children }) => {
  return (
    <UI.PageLayoutWrapper>
      <Header />
      <UI.MainContent>
        <Container>{children}</Container>
      </UI.MainContent>
      <Footer />
    </UI.PageLayoutWrapper>
  );
};
