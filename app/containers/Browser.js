import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import FileList from '../components/FileList';
import Spinner from '../components/Spinner';

class _Browser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    const { BrowserStore } = this.props;
    await BrowserStore.loadFiles();
    this.setState({ isLoading: false });
  }

  render() {
    const { BrowserStore } = this.props;
    const { isLoading } = this.state;

    return (
      <React.Fragment>
        { isLoading
          ? <Spinner />
          : <FileList data={BrowserStore.files} />
        }
      </React.Fragment>
    );
  }
}

const Browser = inject('BrowserStore')(observer(_Browser));

export default Browser;
