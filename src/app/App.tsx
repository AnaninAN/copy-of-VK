import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';

export const App = () => {
  useTheme();

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};
