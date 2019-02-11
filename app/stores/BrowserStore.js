import { observable, action } from 'mobx';
import { listFiles } from 'blockstack';

class BrowserStore {
  @observable files = [];

  @observable isLoading = false;

  @action async loadFiles() {
    try {
      this.isLoading = true;
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
