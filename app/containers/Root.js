import React, { Component } from 'react';
import Client from './Client';

import BrowserStore from '../stores/BrowserStore';
import FileStore from '../stores/FileStore';

export default class Root extends Component {
  render() {
    return (
      <Client stores={{ BrowserStore, FileStore }} />
    );
  }
}
