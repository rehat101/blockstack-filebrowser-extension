import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Browser from './Browser';
import ErrorScreen from '../components/ErrorScreen';
import Spinner from '../components/Spinner';

class _App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    const { AppStore } = this.props;
    await AppStore.loadHubInfo();
    this.setState({ isLoading: false });
  }

  render() {
    const { AppStore } = this.props;
    const { isLoading } = this.state;

    if (AppStore.hasError) {
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
