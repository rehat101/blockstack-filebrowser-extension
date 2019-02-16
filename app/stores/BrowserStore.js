import { observable, action } from 'mobx';
import { listFiles } from 'blockstack';

class BrowserStore {
  @observable files = [];

  @action
  async loadFiles() {
    try {
      const files = [];
      await listFiles(name => files.push(name));
      this.files = files;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new BrowserStore();
