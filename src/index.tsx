import '@/app/styles/index.scss';

import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { App } from '@/app/App';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
