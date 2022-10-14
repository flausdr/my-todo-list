import React from 'react';
import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './app/store';
import './style/index.scss';

import BackMenu from './components/back-menu/back-menu';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <BackMenu />
    {/* </Provider> */}
  </React.StrictMode>
);