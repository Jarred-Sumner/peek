# 1-click from GitHub to local editor

<a href="https://github.com/Jarred-Sumner/1-click-from-github-to-editor/releases/download/v0/git-peek-chrome-extension.zip"><img src="./big-webp.webp" height=400 /></a>

Instantly open files, pull requests, and repositories from GitHub in your local editor. Read, search, and review code from the comfort of your own local editing environment.

git-peek stores the files in a temporary directory, and automatically deletes the repository from your computer when you close your editor. [git-peek](https://github.com/Jarred-Sumner/git-peek) is also available as a CLI, this is the browser extension.

## [Download git-peek for Chrome](https://github.com/Jarred-Sumner/1-click-from-github-to-editor/releases/download/1.0/chrome-extension-git-peek.zip)

<sup>Then drag and drop the `.zip` file into `chrome://extensions`</sup>

## [Download git-peek for Firefox](https://github.com/Jarred-Sumner/1-click-from-github-to-editor/releases/download/1.0/firefox-addon-git-peek.xpi)

<sup>Then just drag and drop the `.xpi` file into Firefox.</sup>

Supports Visual Studio Code and Sublime Text on macOS. Probably not vim, unless its a GUI version.

<img src="./screenshot-1.png" height=400 />
<img src="./screenshot-2.png" height=400 />
<img src="./screenshot-3.png" height=400 />

Basically all this extension does is add three "Open" buttons to GitHub. These "Open" buttons open `git-peek://github-url-in-here`, which triggers `git-peek` to very quickly fetch the file/branch/repo/pull request and open it in your local editor. All the magic is in `git-peek`. This just adds some buttons so you don't have to paste links into your terminal.
