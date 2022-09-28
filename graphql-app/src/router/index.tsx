import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from '../core/constants/routes';
import { Error } from '../pages/Error';
import { Main } from '../pages/main';
import { Post } from '../pages/post';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={ROUTE_PATH.MAIN} element={<Main />} />
          <Route path={`${ROUTE_PATH.POST}/:id`} element={<Post />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
