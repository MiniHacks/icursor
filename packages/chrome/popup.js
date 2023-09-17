console.log("popup.js reached")

document.getElementById('predictGaze').addEventListener('click', () => {
    console.log("predict gaze clicked")
    document.getElementById('predictGaze').value = !document.getElementById('predictGaze').value;
    // FIXME
    document.getElementById('predictGaze').textContent = 
        document.getElementById('predictGaze').value ? "disable" : "enable";

    chrome.runtime.sendMessage({
        action: document.getElementById('predictGaze').value ? 'enableGaze' : 'disableGaze', 
    });
});

// not being used currently
document.getElementById('calibrate').addEventListener('click', () => {
    console.log("calibrate clicked")
    chrome.runtime.sendMessage({
        action: 'calibrate', 
    });
});