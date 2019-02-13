import React, { Component } from 'react';
import Client from './Client';

import AppStore from '../stores/AppStore';
import BrowserStore from '../stores/BrowserStore';
import FileStore from '../stores/FileStore';


window.AppStore = AppStore;

export default class Root extends Component {
  render() {
    return (
      <Client stores={{ AppStore, BrowserStore, FileStore }} />
    );
  }
}
