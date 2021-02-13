import browser from "webextension-polyfill";

function addButtons() {
  const repoOpenButton = document.querySelector(
    '.file-navigation .btn[data-hotkey="t"]'
  );

  if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
    var btn = document.createElement("a");
    btn.innerHTML = "Open (git-peek)";
    btn.className = "btn btn-primary DEDUPE_git-peek-repo";
    btn.href = "git-peek://" + window.location.href;

    // Add the button
    repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
  }

  const fileButton = document.querySelector(".BtnGroup");

  if (fileButton && !document.querySelector(".DEDUPE_git-peek-file")) {
    var container = document.createElement("div");
    container.className = "BtnGroup";
    var btn = document.createElement("a");
    btn.innerHTML = "Open (git-peek)";
    btn.className = "btn btn-sm btn-primary DEDUPE_git-peek-file";
    btn.href = "git-peek://" + window.location.href;
    btn.style.marginRight = "8px";
    container.appendChild(btn);
    // Add the button
    fileButton.parentElement.prepend(container);
  }

  if (
    location.pathname.includes("/pull") &&
    location.pathname.includes("/files")
  ) {
    for (let fileHeaderNode of document.querySelectorAll(".file-header")) {
      let fileActions;

      if (fileHeaderNode.querySelector(".octicon.octicon-file")) {
        fileActions = fileHeaderNode
          .querySelector(".octicon.octicon-file")
          .closest(".BtnGroup");
      } else {
        fileActions = fileHeaderNode.querySelector(
          ".js-toggle-user-reviewed-file-form"
        );
      }

      const url = fileHeaderNode
        .querySelector(
          `*[data-ga-click="View file, click, location:files_changed_dropdown"]`
        )
        ?.getAttribute("href");

      if (
        fileActions &&
        url &&
        !fileHeaderNode.querySelector(".DEDUPE_git-peek-fileaction")
      ) {
        var container = document.createElement("div");
        container.className = "BtnGroup";
        var btn = document.createElement("a");
        btn.innerHTML = "Open (git-peek)";
        btn.className = "btn btn-sm DEDUPE_git-peek-fileaction";
        btn.href = "git-peek://" + location.origin + url;
        btn.style.marginRight = "8px";
        container.appendChild(btn);
        // Add the button
        fileActions.parentElement.prepend(container);
      }
    }
  }
}

// if (!globalThis.__gitPeekDebounce) {
//   globalThis.__gitPeekDebounce = true;

window.addEventListener("DOMContentLoaded", () =>
  requestAnimationFrame(addButtons)
);
window.addEventListener("popstate", () => requestAnimationFrame(addButtons));
window.addEventListener("replaceState", () =>
  requestAnimationFrame(addButtons)
);
requestAnimationFrame(addButtons);

browser.runtime.onMessage.addListener(() => {
  requestAnimationFrame(addButtons);
});
// }
