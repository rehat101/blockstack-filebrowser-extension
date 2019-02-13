import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Browser from './Browser';
import ErrorScreen from '../components/ErrorScreen';
import Spinner from '../components/Spinner';

class _App extends Component {
  async componentDidMount() {
    const { AppStore } = this.props;
    await AppStore.loadHubInfo();
  }

  render() {
    const { AppStore } = this.props;

    if (AppStore.hasError) {
      return (<ErrorScreen />);
    }

    if (AppStore.isLoading) {
      return (<Spinner />);
    }

    return (
      <React.Fragment>
        <Browser />
      </React.Fragment>
    );
  }
}

const App = inject('AppStore')(observer(_App));

export default App;
