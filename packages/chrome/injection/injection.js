
console.log("injection.js loaded");

function calibrate(sender) {
  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    function: () => {
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL('webgazer.min.js');
      document.head.appendChild(script);


      // webgazer.begin() // starting point here
    },
  });
}

function track(sender) {
  chrome.scripting.executeScript({
    target: { tabId: sender.tab.id },
    function: () => {
      const script = document.createElement('script');
      script.src = chrome.runtime.getURL('webgazer.min.js');
      document.head.appendChild(script);

      // webgazer.begin() // starting point here
    },
  });
}


chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if (msg === "calibrate") {
    calibrate(sender);
  }

  // need to expand this
  if (msg == "track") {
    track(sender);
  }

  response({ message: "it worked" });

});



