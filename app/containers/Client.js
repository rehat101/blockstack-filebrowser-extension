import React from 'react';
import { Provider } from 'mobx-react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import File from './File';

const Client = ({ stores }) => {
  return (
    <Provider {...stores}>
      <MemoryRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/file" render={params => <File {...params} />} />
        </Switch>
      </MemoryRouter>
    </Provider>
  );
};

export default Client;
