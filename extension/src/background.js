import "webext-dynamic-content-scripts";
import browser, { tabs } from "webextension-polyfill";

import { debounce } from "lodash-es";

function _throttleInject(tabId) {
  browser.tabs.executeScript(tabId, {
    file: "dist/inject/inject.js",
  });
}

const throttleInject = debounce(_throttleInject, 16);
if (browser.tabs) {
  browser.tabs.onUpdated.addListener((tabId, update, tab) => {
    const url = update.url ?? tab.url ?? "";
    if (url.includes("github.com")) {
      throttleInject(tabId);
      console.log("Tab update");
    }
  });
  console.log("Registered tabs");
}

browser.runtime.onInstalled.addListener(function (object) {
  chrome.tabs.create(
    { url: "https://github.com/Jarred-Sumner/git-peek-chrome-extension" },
    function (tab) {}
  );
});
