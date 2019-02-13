import React from 'react';
import { inject, observer } from 'mobx-react';
import Spinner from '../components/Spinner';
import FileInfo from '../components/FileInfo';

class _File extends React.Component {
  async componentDidMount() {
    const { location: { state: { file } }, FileStore } = this.props;

    await FileStore.getFileInfo(file);
  }

  render() {
    const { location: { state: { file } }, FileStore } = this.props;

    if (FileStore.isLoading) {
      return (<Spinner />);
    }

    return (
      <React.Fragment>
        <FileInfo name={file} data={FileStore.info} />
      </React.Fragment>
    );
  }
}

const File = inject('FileStore')(observer(_File));

export default File;
