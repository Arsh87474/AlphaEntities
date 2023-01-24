/*DOCUMENTATION:
    Get official, correct docs from https://developer.chrome.com/docs/extensions/reference/

    Understand what to search for, what methods and event handlers might be called etc. from:
    https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API
    NOTE: THIS MAY BE OF MANIFEST VERSION 2 WHICH IS OUTDATED, AND OF FIREFOX (it uses "browser.xxx instead of chrome.xxx")
*/

console.log("Background script up'n'running!");
console.log(chrome);

chrome.action.enable();

chrome.action.onClicked.addListener(function(tab){
    // skip urls like "chrome://" to avoid extension error
    if (tab.url?.startsWith("chrome://") || tab.url?.startsWith("edge://")) return;
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        files: ['content.js']
    });
});

// Haven't figured how to show the action yet (that small square box in the toolbar),
// But let's try getting access to tabs (from manifest),
// then when a tab is created browser.tabs.onCreated.addListener
// call chrome.action.enable();
// Otherwise we'll just resort to showing it ourselves