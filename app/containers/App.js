import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import Browser from './Browser';
import Spinner from '../components/Spinner';
import ErrorScreen from '../components/ErrorScreen';

const Container = styled.div`
  position: relative;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 220px;
  left: 160px;
`;

class _App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    const { AppStore } = this.props;
    this.setState({ isLoading: true });
    await AppStore.loadData();
    this.setState({ isLoading: false });
  }

  render() {
    const { AppStore } = this.props;
    const { isLoading } = this.state;

    if (AppStore.error) {
      return (
        <ErrorScreen />
      );
    }

    if (isLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    return (
      <Container>
        <Browser data={AppStore.files} />
      </Container>
    );
  }
}

const App = inject('AppStore')(observer(_App));

export default App;
