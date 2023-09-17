chrome.storage.onChanged.addListener((changes, namespaces) => {
  chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
          message = {
              action: changes.tracking.newValue == 'true' ? 'enableGaze' : 'disableGaze',
              tabId: tab.id
          }
          console.log(tab.id);
          chrome.scripting.executeScript({target: {tabId: tab.id}, files: ['./injection/injection.js']}, () => {
            chrome.scripting.executeScript({
              target: {tabId: tab.id},
              args: [message],
              func: (...args) => handleMessage(...args),
            });
          });
      });
  });
})