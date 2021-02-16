import browser from "webextension-polyfill";
import { exec, match, parse } from "matchit";
import path from "path-browserify";

enum RouteType {
  root,
  rootFile,
  rootTree,
  folder,
  file,
  pullRequestFiles,
}

type ParamsList = {
  owner: string;
  repo: string;
  pullRequestID?: string;
  ref?: string;
  path?: string;
};

const PRIVATE_REPO_INSTRUCTIONS_KEY = "popups/private-repo-instructions";

function isPrivateRepo() {
  return !!document.querySelector("h1 > .octicon-lock");
}

async function shouldShowPrivateRepoMessage() {
  return !!(await browser.storage.sync.get(PRIVATE_REPO_INSTRUCTIONS_KEY));
}

async function setShowedPrivateRepoMessage() {
  return await browser.storage.sync.set({
    [PRIVATE_REPO_INSTRUCTIONS_KEY]: true,
  });
}

function load() {
  const rootRepoRoute = parse("/:owner/:repo");
  const treeBaseRoute = parse("/:owner/:repo/tree/:ref");
  const fileRoute = parse("/:owner/:repo/tree/:ref/*");
  const rootFileRoute = parse("/:owner/:repo/blob/:ref/:filename");
  const blobFileRoute = parse("/:owner/:repo/blob/:ref/*");
  const pullRequestCodeRoute = parse("/:owner/:repo/pull/:pullRequestID/files");
  const routes = [
    rootRepoRoute,
    treeBaseRoute,
    fileRoute,
    pullRequestCodeRoute,
    rootFileRoute,
    blobFileRoute,
  ];

  const matcher = match(location.pathname, routes);

  let routeType: RouteType;

  switch (matcher) {
    case rootRepoRoute: {
      routeType = RouteType.root;
      break;
    }
    case treeBaseRoute: {
      routeType = RouteType.rootTree;
      break;
    }

    case blobFileRoute:
    case fileRoute: {
      routeType = RouteType.file;
      if (document.querySelector("#files")) {
        routeType = RouteType.folder;
      }
      break;
    }

    case rootFileRoute: {
      routeType = RouteType.rootFile;
      if (document.querySelector("#files")) {
        routeType = RouteType.folder;
      }
      break;
    }

    case pullRequestCodeRoute: {
      routeType = RouteType.pullRequestFiles;
      break;
    }
  }

  const params: {
    owner: string;
    repo: string;
    pullRequestID: string;
    ref: string;
    extension: string;
  } = exec(location.pathname, matcher);
  params["path"] = params["*"];
  delete params["*"];
  addButtons(routeType, params);
}
const BUTTON_TITLE = "Peek";
let didShowPrivateRepoMessage = false;

async function onClickPrivateRepo() {
  if (!isPrivateRepo() || didShowPrivateRepoMessage) return;

  if (await shouldShowPrivateRepoMessage()) {
    await setShowedPrivateRepoMessage();
    didShowPrivateRepoMessage = true;
  }

  didShowPrivateRepoMessage = true;
}

function addButtons(route: RouteType, params: ParamsList) {
  switch (route) {
    case RouteType.rootTree:
    case RouteType.root: {
      if (route === RouteType.root) {
        const branchText = document.querySelector(
          "#branch-select-menu .btn .css-truncate-target"
        );
        if (branchText) {
          params.ref = branchText.textContent;
        }
      }
      const repoOpenButton = document.querySelector(
        '.file-navigation .btn[data-hotkey="t"]'
      );

      if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
        var btn = document.createElement("a");
        btn.innerHTML = BUTTON_TITLE;
        btn.className = "btn DEDUPE_git-peek-repo btn-peek";

        if (params.ref) {
          btn.href =
            "git-peek://" +
            location.origin +
            `/${params.owner}/${params.repo}/tree/${params.ref}`;
        } else {
          btn.href = "git-peek://" + location.origin + location.pathname;
        }

        // Add the button
        repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
      }
      break;
    }
    case RouteType.folder: {
      const repoOpenButton = document.querySelector('.btn[data-hotkey="t"]');

      if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
        var btn = document.createElement("a");
        btn.innerHTML = BUTTON_TITLE;
        btn.className = "btn DEDUPE_git-peek-repo btn-peek";

        if (params.ref) {
          btn.href =
            "git-peek://" +
            location.origin +
            `/${params.owner}/${params.repo}/tree/${params.ref}`;
        } else {
          btn.href = "git-peek://" + location.origin + location.pathname;
        }
        btn.style["marginRight"] = "8px";

        repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
      }

      break;
    }
    case RouteType.rootFile:
    case RouteType.file: {
      const fileButton = document.querySelector(".BtnGroup");

      if (fileButton && !document.querySelector(".DEDUPE_git-peek-file")) {
        var container = document.createElement("div");
        container.className = "BtnGroup";
        var btn = document.createElement("a");
        btn.innerHTML = BUTTON_TITLE;
        btn.className = "btn btn-sm DEDUPE_git-peek-file btn-peek";
        btn.href = "git-peek://" + window.location.href;
        btn.style.marginRight = "8px";
        container.appendChild(btn);
        // Add the button
        fileButton.parentElement.prepend(container);
      }
      break;
    }
    case RouteType.pullRequestFiles: {
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
          btn.innerHTML = BUTTON_TITLE;
          btn.className = "btn btn-sm DEDUPE_git-peek-fileaction btn-peek";
          btn.href = "git-peek://" + url;
          btn.style.marginRight = "8px";
          container.appendChild(btn);
          // Add the button
          fileActions.parentElement.prepend(container);
        }
      }
      break;
    }
  }
}

// if (!globalThis.__gitPeekDebounce) {
//   globalThis.__gitPeekDebounce = true;

window.addEventListener("DOMContentLoaded", () => requestAnimationFrame(load));
window.addEventListener("popstate", () => requestAnimationFrame(load));
window.addEventListener("replaceState", () => requestAnimationFrame(load));
requestAnimationFrame(load);

browser.runtime.onMessage.addListener(() => {
  requestAnimationFrame(load);
});
// }
