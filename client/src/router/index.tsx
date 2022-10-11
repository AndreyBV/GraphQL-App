import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH_PAGE } from './constants/routes';
import { Error } from '../pages/Error';
import { Main } from '../pages/main';
import { Post } from '../pages/post';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={PATH_PAGE.MAIN} element={<Main />} />
          <Route path={`${PATH_PAGE.POST}/:id`} element={<Post />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
