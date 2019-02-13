import { observable, action } from 'mobx';
import { listFiles } from 'blockstack';

class BrowserStore {
  @observable files = [];

  @observable isLoading = true;

  @action async loadFiles() {
    try {
      const files = [];
      await listFiles(name => files.push(name));
      this.files = files;
      this.isLoading = false;
    } catch (err) {
      console.error(err);
    }
  }
}

export default new BrowserStore();
