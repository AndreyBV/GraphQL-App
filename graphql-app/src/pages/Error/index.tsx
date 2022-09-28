import React from 'react';
import { Typography } from '../../components/UI/Typography';
import { PageLayout } from '../../layouts/page';
import * as UI from './styles';

interface IError {
  code?: string;
  message?: string;
}

export const Error: React.FC<IError> = ({ code, message }) => {
  return (
    <PageLayout>
      <UI.CircleWrapper>
        <Typography>{code || '404'}</Typography>
        <Typography>{message || 'Page not found'}</Typography>
      </UI.CircleWrapper>
    </PageLayout>
  );
};
