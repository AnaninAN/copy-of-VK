import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

export const App = () => {
  useTheme();

  return <div className="app">App</div>;
};
