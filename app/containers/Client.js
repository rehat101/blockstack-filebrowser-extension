import React from 'react';
import { Provider } from 'mobx-react';
import App from './App';

const Client = ({ stores }) => {
  return (
    <Provider {...stores}>
      <App />
    </Provider>
  );
};

export default Client;
