import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Browser from './Browser';
import ErrorScreen from '../components/ErrorScreen';

class _App extends Component {
  async componentDidMount() {
    const { AppStore } = this.props;
    await AppStore.loadData();
  }

  render() {
    const { AppStore } = this.props;

    if (AppStore.error) {
      return (<ErrorScreen />);
    }

    return (
      <MemoryRouter>
        <Switch>
          <Route exact path="/" component={Browser} />
          <Route path="/users" render={() => <p>Hello</p>} />
        </Switch>
      </MemoryRouter>
    );
  }
}

const App = inject('AppStore')(observer(_App));

export default App;
