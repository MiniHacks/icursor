const predictGaze = document.getElementById('predictGaze');
const calibrate = document.getElementById('calibrate');

predictGaze.addEventListener('click', async () => {
    const state = (await chrome.storage.sync.get(["tracking"])).tracking
    predictGaze.value = state == 'true' ? 'false' : 'true';
    predictGaze.textContent = predictGaze.value == 'true' ? "Disable Eye Tracking" : "Enable Eye Tracking";
    await chrome.storage.sync.set({ "tracking": predictGaze.value });
});

calibrate.addEventListener('click', async () => {
    const state = (await chrome.storage.sync.get(["calibrate"])).calibrate
    const newState = state == 'true' ? 'false' : 'true';
    await chrome.storage.sync.set({ "calibrate": newState });
});

window.addEventListener("load", async () => {
    const isTracking = await chrome.storage.sync.get(["tracking"]);
    const isCalibrated = await chrome.storage.sync.get(["calibrate"]);

    if (isTracking !== null) {
        predictGaze.textContent = isTracking.tracking == 'true' ? "Disable Eye Tracking" : "Enable Eye Tracking";
        predictGaze.value = isTracking.tracking
    } else {
        await chrome.storage.sync.set({ "tracking": "false" });
        await chrome.storage.sync.set({ "calibrate": "false" });
        predictGaze.textContent = "Enable";
        predictGaze.value = 'false'
    }
});