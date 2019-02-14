import { observable, action } from 'mobx';
import { getFile } from 'blockstack';

class FileStore {
  @observable info = {};

  @action setInfo(info) {
    this.info = info;
  }

  @action async getFileInfo(name) {
    try {
      const data = await getFile(name, { decrypt: false });
      this.setInfo(data);
      this.isLoading = false;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new FileStore();
