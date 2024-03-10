export enum AppRoutes {
  MY = 'my',
  NEWS = 'news',
  MESSENGER = 'messenger',
  SETTINGS = 'settings',
  // последний
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MY]: '/',
  [AppRoutes.NEWS]: '/feed',
  [AppRoutes.MESSENGER]: '/im',
  [AppRoutes.SETTINGS]: '/settings',
  // последний
  [AppRoutes.NOT_FOUND]: '*',
};
