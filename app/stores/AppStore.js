import { observable, action } from 'mobx';
import { getCurrentTab, getHubConfig } from '../utils';

class AppStore {
  @observable error = false;

  @action async loadData() {
    try {
      window.localStorage.clear();
      const tabInfo = await getCurrentTab();
      const config = await getHubConfig(tabInfo.id);
      window.localStorage.setItem('blockstack-gaia-hub-config', config);
    } catch (err) {
      this.error = true;
      console.error(err);
    }
  }
}

export default new AppStore();
