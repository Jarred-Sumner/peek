import "webext-dynamic-content-scripts";
import browser, { tabs } from "webextension-polyfill";

import { debounce } from "lodash-es";

function _throttleInject(tabId) {
  try {
    browser.tabs.executeScript(tabId, {
      file: "dist/inject/inject.js",
    });
  } catch (exception) {
    console.error(exception);
  }
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

browser.runtime.onInstalled.addListener(async function (object) {
  const { os } = await browser.runtime.getPlatformInfo();

  if (os === "mac") {
    await browser.tabs.create({
      url:
        "https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/POST-INSTALL-MAC.md",
    });
  } else {
    await browser.tabs.create({
      url:
        "https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/POST-INSTALL.md",
    });
  }
});
