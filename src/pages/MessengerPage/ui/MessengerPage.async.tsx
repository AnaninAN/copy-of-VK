import { lazy } from 'react';

export const MessengerPageAsync = lazy(() =>
  import('./MessengerPage').then((module) => ({
    default: module.MessengerPage,
  }))
);
