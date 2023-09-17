const predictGaze = document.getElementById('predictGaze');
const calibrate = document.getElementById('calibrate');

predictGaze.addEventListener('click', async () => {
    const state = (await chrome.storage.sync.get(["tracking"])).tracking
    console.log(state);
    predictGaze.value = state == 'true' ? 'false' : 'true';
    predictGaze.textContent = predictGaze.value == 'true' ? "Disable Eye Tracking" : "Enable Eye Tracking";
    await chrome.storage.sync.set({ "tracking": predictGaze.value });
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

window.addEventListener("load", async () => {
    const isTracking = await chrome.storage.sync.get(["tracking"]);

    if (isTracking !== null) {
        predictGaze.textContent = isTracking.tracking == 'true' ? "Disable Eye Tracking" : "Enable Eye Tracking";
        predictGaze.value = isTracking.tracking
    } else {
        await chrome.storage.sync.set({ "tracking": "false" });
        predictGaze.textContent = "Enable";
        predictGaze.value = 'false'
    }
});