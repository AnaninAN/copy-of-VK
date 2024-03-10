import { RouteProps } from 'react-router-dom';

import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';

import { MyPage } from '@/pages/MyPage';
import { NewsPage } from '@/pages/NewsPage';
import { MessengerPage } from '@/pages/MessengerPage';
import { SettingsPage } from '@/pages/SettingsPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routes: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MY]: {
    path: RoutePath.my,
    element: <MyPage />,
  },
  [AppRoutes.NEWS]: {
    path: RoutePath.news,
    element: <NewsPage />,
  },
  [AppRoutes.MESSENGER]: {
    path: RoutePath.messenger,
    element: <MessengerPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: RoutePath.settings,
    element: <SettingsPage />,
  },
  // последний
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
