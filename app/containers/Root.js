import React, { Component } from 'react';
import Client from './Client';

import AppStore from '../stores/AppStore';

export default class Root extends Component {
  render() {
    return (<Client stores={{ AppStore }} />);
  }
}
