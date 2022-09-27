import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTE_PATH } from '../core/constants/routes';
import { Main } from '../pages/main';
import { Post } from '../pages/post';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path={ROUTE_PATH.MAIN} element={<Main />} />
        </Routes>
        <Routes>
          <Route path={ROUTE_PATH.POST} element={<Post />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
