chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'changeColor') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target : {tabId : tabs[0].id},
          files : ["test2.js"]
        }).then(
          () => console.log("script injected!")
        );
      });
    }
  });