console.log("test.js reached")

document.getElementById('changeColorButton').addEventListener('click', () => {
    console.log("button clicked")
    chrome.runtime.sendMessage({ action: 'changeColor', color: 'red' });
});