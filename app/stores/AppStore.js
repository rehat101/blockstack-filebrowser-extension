import { observable, action } from 'mobx';
import { getCurrentTab, getBlockConfig } from '../utils';

class AppStore {
  @observable error = false;

  @action async loadData() {
    try {
      const tabInfo = await getCurrentTab();
      const HubConfig = await getBlockConfig(
        tabInfo.id,
        'localStorage.getItem("blockstack-gaia-hub-config")');
      window.localStorage.setItem('blockstack-gaia-hub-config', HubConfig);
    } catch (err) {
      this.error = true;
      console.error(err);
    }
  }
}

export default new AppStore();
