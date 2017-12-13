chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.storage.sync.get({
        enabled: false
    }, function (items) {
        if (items.enabled) {

        var tabCount = {
            all: 0,
            pinned: 0
        };
        var countAll = function (tabs) {
            tabCount.all = tabs.length;
        };
        chrome.tabs.query({currentWindow: true}, countAll);
        chrome.tabs.move(tabId, {index: tabCount.all});
    }
    });


})
;

chrome.tabs.onCreated.addListener(function (tab) {
    chrome.extension.getBackgroundPage().console.log('create');

});