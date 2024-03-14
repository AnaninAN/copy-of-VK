import { Suspense } from 'react';

import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { AppRouter } from './providers/router';
import { Header } from '@/widgets/Header';
import { AppContainer } from '@/shared/ui/AppContainer';

export const App = () => {
  useTheme();

  return (
    <div className="app">
      <Suspense>
        <Header />
        <AppContainer>
          <AppRouter />
        </AppContainer>
      </Suspense>
    </div>
  );
};
