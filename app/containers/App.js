import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Browser from './Browser';
import ErrorScreen from '../components/ErrorScreen';
import Spinner from '../components/Spinner';
import { getCurrentTab, getBlockConfig } from '../utils';

class _App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      hasError: false
    };
  }

  async componentDidMount() {
    await this.loadHubInfo();
    this.setState({ isLoading: false });
  }

  async loadHubInfo() {
    try {
      window.localStorage.clear();
      const tabInfo = await getCurrentTab();
      const HubConfig = await getBlockConfig(
        tabInfo.id,
        'localStorage.getItem("blockstack-gaia-hub-config")'
      );
      const userConfig = await getBlockConfig(
        tabInfo.id,
        'localStorage.getItem("blockstack")'
      );
      window.localStorage.setItem('blockstack-gaia-hub-config', HubConfig);
      window.localStorage.setItem('blockstack', userConfig);
    } catch (err) {
      this.setState({ hasError: true });
      console.error(err);
    }
  }

  render() {
    const { isLoading, hasError } = this.state;

    if (hasError) {
      return (<ErrorScreen />);
    }

    if (isLoading) {
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
