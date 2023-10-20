import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import "./styles/index.scss";
import NotificationProvider from './Notifications/NotificationProvider';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
