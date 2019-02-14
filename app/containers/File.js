import React from 'react';
import { inject, observer } from 'mobx-react';
import Spinner from '../components/Spinner';
import FileInfo from '../components/FileInfo';

class _File extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    const { location: { state: { file } }, FileStore } = this.props;

    await FileStore.getFileInfo(file);
    this.setState({ isLoading: false });
  }

  render() {
    const { location: { state: { file } }, FileStore } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
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
