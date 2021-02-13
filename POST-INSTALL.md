## Installing git-peek

You'll need to have [`git-peek`](https://github.com/jarred-sumner/git-peek) installed for this to work.

To do that, run this:

```bash
npm install -g git-peek
```

Next, you'll need to register the `git-peek://` URL handler. Just run this comnad:

```bash
git peek -r
```

Then, click this button to test it:

<a href="git-peek://https://github.com/Jarred-Sumner/git-peek-chrome-extension/tree/blob/main/"><img src="./test-button.svg"/></a>

If it works, your editor will now open.

If you want to configure git-peek, header over to the main [git-peek repo](https://github.com/Jarred-Sumner/git-peek).

Note: currently only macOS is supported. Any non-terminal based editor should work (sorry vim users! I don't know how to make it work in vim yet.)
