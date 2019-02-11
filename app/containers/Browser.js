import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import BrowserList from '../components/BrowserList';
import Spinner from '../components/Spinner';

const Container = styled.div`
  position: relative;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 220px;
  left: 160px;
`;

class _Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    };
  }

  async componentDidMount() {
    const { BrowserStore } = this.props;
    this.setState({ isLoading: true });
    await BrowserStore.loadFiles();
    this.setState({ isLoading: false });
  }

  render() {
    const { BrowserStore } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    return (
      <Container>
        <BrowserList data={BrowserStore.files} />
      </Container>
    );
  }
}

const Browser = inject('BrowserStore')(observer(_Browser));

export default Browser;
