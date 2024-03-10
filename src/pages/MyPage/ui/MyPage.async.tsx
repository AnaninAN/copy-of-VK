import { lazy } from 'react';

export const MyPageAsync = lazy(() =>
  import('./MyPage').then((module) => ({ default: module.MyPage }))
);
