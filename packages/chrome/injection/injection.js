console.log("injection.js loaded");

function calibrate(tabId) {
  window.onscroll = function () { window.scrollTo(0, 0); };
  document.body.classList.add("overlay-div");
  const overlayDiv1 = document.createElement("div");
  overlayDiv1.className = "overlay-div";
  document.body.appendChild(overlayDiv1);

  function createSquare(className) {
    const square = document.createElement("div");
    square.className = "corner-square " + className;
    document.body.insertBefore(square, document.body.firstChild);
  }

  // Create squares in all four corners
  createSquare("top-left");
  createSquare("top-right");
  createSquare("bottom-left");
  createSquare("bottom-right");
  createSquare("middle-top");
  createSquare("middle-middle");
  createSquare("middle-bottom");
  createSquare("middle-left");
  createSquare("middle-right");

  // window.onscroll = null; // RESETs SCROLLING
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
  calibrate(message.tabId);
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



