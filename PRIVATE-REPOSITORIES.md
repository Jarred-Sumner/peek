## Opening a private repository with Peek

To open a private repository with Peek, you will need to set a GitHub [personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

In `$HOME/.git-peek`:

```bash
GITHUB_TOKEN="*******"
```

On Windows, this file is located in `%HOMEDRIVE%\%HOMEPATH%\.git-peek`. It isn't automatically created, so you should create it.

You can run `git peek --env` to print the current environemnt:

```
ENVIRONMENT VARIABLES:

  .env file: ✅ /Users/jarredsumner/.git-peek

  $EDITOR: code --wait

  $GITHUB_TOKEN: ****************************************

  $GITHUB_BASE_DOMAIN: github.com

  $GITHUB_API_DOMAIN: api.github.com
```
