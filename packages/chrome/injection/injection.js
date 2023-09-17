console.log("injection.js loaded");

function calibrate(sender) {
  console.log("calibrate shit")
  // chrome.scripting.executeScript({
  //   target: { tabId: sender.tab.id },
  //   function: () => {
  //     const script = document.createElement('script');
  //     script.src = chrome.runtime.getURL('webgazer.min.js');
  //     document.head.appendChild(script);

  //     // webgazer.begin() // starting point here
  //   },
  // });s
}

function enable(sender) {
  console.log("enable shit")
  // chrome.scripting.executeScript({
  //   target: { tabId: sender.tab.id },
  //   function: () => {
  //     const script = document.createElement('script');
  //     script.src = chrome.runtime.getURL('webgazer.min.js');
  //     document.head.appendChild(script);

  //     // webgazer.begin() // starting point here
  //   },
  // });
}

function disable(sender) {
  console.log("disable shit")
}

// chrome.runtime.onMessage.addListener(function (message) {
//   console.log("received message: ", message);
// });

function handleState(message)  {
  console.log("received message (st): ", message);
}

function handleCalibrate(message) {
  console.log("received message (ca): ", message);
}

// const messageHandler = (message) => {
//   if (message === "calibrate") {
//     calibrate("");
//   } else if (message === "enableGaze") {
//     enable("");
//   } else if (message === "disableGaze") {
//     disable("");
//   }

//   response({ message: "it worked" });
// };



