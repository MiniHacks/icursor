console.log("popup.js reached")

document.getElementById('predictGaze').addEventListener('click', async () => {
    console.log("predict gaze clicked")
    document.getElementById('predictGaze').value = !document.getElementById('predictGaze').value;
    // FIXME
    document.getElementById('predictGaze').textContent = 
        document.getElementById('predictGaze').value ? "disable" : "enable";
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    const response = await chrome.tabs.sendMessage(
        tab.id,
        {action: document.getElementById('predictGaze').value ? 'enableGaze' : 'disableGaze'},
        (response) => {
            console.log(response);
        }
    );
});

// not being used currently
document.getElementById('calibrate').addEventListener('click', () => {
    console.log("calibrate clicked")
    chrome.runtime.sendMessage({
        action: 'calibrate', 
    });
});