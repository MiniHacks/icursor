const predictGaze = document.getElementById('predictGaze');
const calibrate = document.getElementById('calibrate');

predictGaze.addEventListener('click', async () => {
    const state = localStorage.getItem("tracking");
    predictGaze.value = state == 'true' ? 'false' : 'true';
    predictGaze.textContent = predictGaze.value == 'true' ? "Disable" : "Enable";
    localStorage.setItem("tracking", predictGaze.value);
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    const response = await chrome.tabs.sendMessage(
        tab.id,
        {action: predictGaze.value == 'true' ? 'enableGaze' : 'disableGaze'},
        (response) => {
        }
    );
});

calibrate.addEventListener('click', async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});
    const response = await chrome.tabs.sendMessage(
        tab.id,
        {action: 'calibrate'},
        (response) => {
        }
    );
});

window.addEventListener("load", () => {
    const isTracking = localStorage.getItem("tracking");

    if (isTracking !== null) {
        predictGaze.textContent = isTracking == 'true' ? "Disable" : "Enable";
        predictGaze.value = isTracking
    } else {
        localStorage.setItem("tracking", 'false');
        predictGaze.textContent = "Enable";
        predictGaze.value = 'false'
    }
});