import { observable, action } from 'mobx';
import { getCurrentTab, getBlockConfig } from '../utils';

class AppStore {
  @observable hasError = false;

  @action
  async loadHubInfo() {
    try {
      window.localStorage.clear();
      const tabInfo = await getCurrentTab();
      const HubConfig = await getBlockConfig(
        tabInfo.id,
        'localStorage.getItem("blockstack-gaia-hub-config")'
      );
      const userConfig = await getBlockConfig(
        tabInfo.id,
        'localStorage.getItem("blockstack")'
      );
      window.localStorage.setItem('blockstack-gaia-hub-config', HubConfig);
      window.localStorage.setItem('blockstack', userConfig);
    } catch (err) {
      this.hasError = true;
      console.error(err);
    }
  }
}


export default new AppStore();
