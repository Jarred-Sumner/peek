# 1-click from GitHub to editor

<img src="./screenshot-1.png" height=400 />

Instantly open files, pull requests, and repositories from GitHub in your local editor. Read, search, and review code from the comfort of your own local editing environment.

This extension requires installing git-peek to register the URL handler – head over to https://github.com/jarred-sumner/git-peek to do that.

## Installation

To install the chrome extension:

1. [Download the extension](`/git-peek-chrome-extension.zip`)
2. Drag and drop the `.zip` file into `chrome://extensions`

It'll be in the Chrome Store eventually. The source for the extension is in this repo if you want to look at the code yourself.

Most of the real code for this is in the [`git-peek`](https://github.com/jarred-sumner/git-peek) repository. All this does is add buttons that open the `git-peek://` URL handler with the right URLs.

<img src="./screenshot-2.png" height=400 />
<img src="./screenshot-3.png" height=400 />
