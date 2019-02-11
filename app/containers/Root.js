import React, { Component } from 'react';
import Client from './Client';

import AppStore from '../stores/AppStore';
import BrowserStore from '../stores/BrowserStore';


export default class Root extends Component {
  render() {
    return (<Client stores={{ AppStore, BrowserStore }} />);
  }
}
