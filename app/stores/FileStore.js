import { observable, action } from 'mobx';
import { getFile } from 'blockstack';

class FileStore {
  @observable info = {};

  @observable isLoading = true;

  @action async getFileInfo(name) {
    try {
      const data = await getFile(name);
      this.info = data;
      this.isLoading = false;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new FileStore();
