chrome.runtime.onInstalled.addListener(() => {
    chrome.action.getUserSettings(
        (userSettings) => {
            userSettings.isOnToolbar = true;
        }
    );
});