import Promise from 'bluebird';

export const getCurrentTab = () => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabArray) => {
      const activeTab = tabArray[0];

      if (!activeTab) {
        reject(new Error('No tab found'));
      }

      resolve(activeTab);
    });
  });
};


export const getBlockConfig = (tabId, script) => {
  if (!tabId) throw new Error('Please define a tab id');

  return new Promise((resolve, reject) => {
    chrome.tabs.executeScript(tabId, { code: script },
      (res) => {
        if (!res[0]) {
          reject(new Error('Cannot find gaia hub config'));
        }

        resolve(res.pop());
      });
  });
};
