chrome.storage.onChanged.addListener((changes, namespaces) => {
  console.log(changes);
  if (changes.tracking) {
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
            message = {
                action: changes.tracking.newValue == 'true' ? 'enableGaze' : 'disableGaze',
                tabId: tab.id
            }
            chrome.scripting.executeScript({target: {tabId: tab.id}, files: ['./injection/injection.js']}, () => {
              chrome.scripting.executeScript({
                target: {tabId: tab.id},
                args: [message],
                func: (...args) => handleState(...args),
              });
            });
        });
    });
  }
  if (changes.calibrate) {
    chrome.tabs.query({ active: true, currentWindow: true}, (tab) => {
      message = {
        action: true,
        tabId: tab[0].id
      }
      chrome.scripting.executeScript({target: {tabId: tab[0].id}, files: ['./injection/injection.js']}, () => {
        chrome.scripting.executeScript({
          target: {tabId: tab[0].id},
          args: [message],
          func: (...args) => handleCalibrate(...args),
        });
      });
    });
    console.log(changes);
  }
})
