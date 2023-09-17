chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target : {tabId : tabs[0].id},
        files : ["injection.js"]
      }).then(
        () => console.log("script injected!")
      );
    });
  });

  // chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //     chrome.scripting.executeScript({
  //       target : {tabId : tabs[0].id},
  //       files : ["./injection/injection.js"]
  //     }, () => {
  //       chrome.scripting.executeScript({
  //         target : {tabId : tabs[0].id},
  //         args: [message],
  //         func: (...args) => messageHandler(message)
  //       })
  //     }).then(
  //       () => console.log("script injected!")
  //     );
  //   });
  // });


