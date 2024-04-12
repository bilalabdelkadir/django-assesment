import React from 'react';
import ReactDOM from 'react-dom/client';
import router from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import store, { persistor } from './store/store.ts';
import { MantineProvider } from '@mantine/core';
import theme from './theme.ts';
import '@mantine/notifications/styles.css';
import '@mantine/core/styles.css';
import { Notifications } from '@mantine/notifications';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider
          theme={theme}
          defaultColorScheme="light"
          forceColorScheme="light"
        >
          <RouterProvider router={router} />
          <Notifications position="top-right" />
        </MantineProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
