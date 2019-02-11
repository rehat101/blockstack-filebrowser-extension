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
  async componentDidMount() {
    const { BrowserStore } = this.props;
    await BrowserStore.loadFiles();
  }

  render() {
    const { BrowserStore } = this.props;

    return (
      <Container>
        { BrowserStore.isLoading
          ? <SpinnerContainer><Spinner /></SpinnerContainer>
          : <BrowserList data={BrowserStore.files} />
        }
      </Container>
    );
  }
}

const Browser = inject('BrowserStore')(observer(_Browser));

export default Browser;
