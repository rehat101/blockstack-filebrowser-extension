import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import App from './App';

class Client extends Component {
  render() {
    return (
      <Provider { ...this.props.stores }>
        <App />
      </Provider>
    );
  }
}

export default Client;
