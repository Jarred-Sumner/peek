import { exec, match, parse } from "matchit";
import browser from "webextension-polyfill";

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

const svg = `
<svg
  aria-hidden="true"
  focusable="false"
  height=18
  width=12
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 384 512"
  class="icon-peek"
>
  <path
    fill="currentColor"
    d="M186.1.09C81.01 3.24 0 94.92 0 200.05v263.92c0 14.26 17.23 21.39 27.31 11.31l24.92-18.53c6.66-4.95 16-3.99 21.51 2.21l42.95 48.35c6.25 6.25 16.38 6.25 22.63 0l40.72-45.85c6.37-7.17 17.56-7.17 23.92 0l40.72 45.85c6.25 6.25 16.38 6.25 22.63 0l42.95-48.35c5.51-6.2 14.85-7.17 21.51-2.21l24.92 18.53c10.08 10.08 27.31 2.94 27.31-11.31V192C384 84 294.83-3.17 186.1.09zM128 224c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm128 0c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
    class=""
  ></path>
</svg>`;
let addedHooks = new WeakMap<HTMLElement, boolean>();
async function addHooks(btn: HTMLElement) {
  btn.innerHTML = `
    ${svg}
    <span class="btn-peek-title">${BUTTON_TITLE}</span>
  `;

  if (!isPrivateRepo()) return;

  let href: string = btn.getAttribute("href");

  if (!href.includes("?")) {
    href += "?noCDN";
    btn.setAttribute("href", href);
  } else if (!href.includes("noCDN")) {
    href += "&noCDN";
    btn.setAttribute("href", href);
  }

  if (addedHooks.has(btn) || didShowPrivateRepoMessage) {
    return;
  }

  addedHooks.set(btn, true);

  btn.addEventListener("click", onClickPrivateRepo, {
    once: true,
    passive: true,
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

const PRIVATE_REPO_LINK =
  "https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/PRIVATE-REPOSITORIES.md#L1";

async function onClickPrivateRepo() {
  if (!isPrivateRepo() || didShowPrivateRepoMessage) return;

  if (await shouldShowPrivateRepoMessage()) {
    window.open(PRIVATE_REPO_LINK, "_blank");
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
        ".file-navigation get-repo"
      );

      if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
        var btn = document.createElement("a");
        btn.className = "btn DEDUPE_git-peek-repo btn-peek btn-peek--spaced";
        if (params.ref) {
          btn.href =
            "git-peek://" +
            location.origin +
            `/${params.owner}/${params.repo}/tree/${params.ref}`;
        } else {
          btn.href = "git-peek://" + location.origin + location.pathname;
        }

        addHooks(btn);

        // Add the button
        repoOpenButton.parentElement.insertBefore(btn, repoOpenButton);
      }
      break;
    }
    case RouteType.folder: {
      const repoOpenButton = document.querySelector('.btn[data-hotkey="t"]');

      if (repoOpenButton && !document.querySelector(".DEDUPE_git-peek-repo")) {
        var btn = document.createElement("a");
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

        addHooks(btn);

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
        btn.className = "btn btn-sm DEDUPE_git-peek-file btn-peek";
        btn.href = "git-peek://" + window.location.href;
        btn.style.marginRight = "8px";
        container.appendChild(btn);

        addHooks(btn);

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

        let url = fileHeaderNode
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
          btn.className = "btn btn-sm DEDUPE_git-peek-fileaction btn-peek";
          if (url.startsWith("/")) {
            url = location.origin + url;
          }
          btn.href = "git-peek://" + url;
          btn.style.marginRight = "8px";
          container.appendChild(btn);

          addHooks(btn);

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
