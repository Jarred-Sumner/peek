## Install git-peek

[//]: <!- **If you're seeing this secret message, that means it worked!** -->

You'll need to have [`git-peek`](https://github.com/jarred-sumner/git-peek) installed for this to work.

```bash
npm install -g @jarred/git-peek
```

## Make the Peek button work

[//]: <!- **If you're seeing this secret message, that means it worked!** -->

Register the `git-peek://` URL handler:

```bash
git peek -r
```

Then, head over to the test page:

<a href="https://github.com/Jarred-Sumner/1-click-from-github-to-editor/blob/main/TEST-PAGE.md">
  <img src="./test-button-img.png" height="48" />
</a>

### Private repositories

To use Peek with a private repository, set `$GITHUB_TOKEN` in `%HOMEDRIVE%\%HOMEPATH%\.git-peek`:

```
GITHUB_TOKEN="*******"
EDITOR="code" # optional
```

If you're having trouble with this, [here is more text to read](/PRIVATE-REPOSITORIES.md).

[//]: <!- **If you're seeing this secret message, that means it worked!** -->
