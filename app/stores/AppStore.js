import { observable, action } from 'mobx';
import { listFiles } from 'blockstack';
import { getCurrentTab, getHubConfig } from '../utils';

class AppStore {
  @observable files = [];
  @observable error = false;

  @action async loadData() {
    try {
      const tabInfo = await getCurrentTab();
      const config = await getHubConfig(tabInfo.id);
      const files = [];
      window.localStorage.setItem('blockstack-gaia-hub-config', config);
      await listFiles(name => files.push(name));
      this.files = files;
    } catch (err) {
      this.error = true;
      console.log(err);
    }
  }
}

export default new AppStore();
