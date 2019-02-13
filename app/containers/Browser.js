import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FileList from '../components/FileList';
import Spinner from '../components/Spinner';

class _Browser extends Component {
  async componentDidMount() {
    const { BrowserStore } = this.props;
    await BrowserStore.loadFiles();
  }

  render() {
    const { BrowserStore } = this.props;
    return (
      <React.Fragment>
        { BrowserStore.isLoading
          ? <Spinner />
          : <FileList data={BrowserStore.files} />
        }
      </React.Fragment>
    );
  }
}

const Browser = inject('BrowserStore')(observer(_Browser));

export default Browser;
