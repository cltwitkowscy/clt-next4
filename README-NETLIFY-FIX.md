# Patch: Fix next-intl on Netlify + resolve ESLint conflict

This patch does **two** things that remove the _root cause_ of your Netlify build failure:

1. **Wires `next-intl` properly** via the official plugin in `next.config.ts` and adds the
   required `./src/i18n/request.ts` + `middleware.ts`. Without this, Next's pre-render
   of pages like `/en/portfolio` fails with:
   > Couldn't find next-intl config file.

2. **Removes merge-conflict markers** from `eslint.config.mjs` and sets a working flat config.

## How to apply

1. Unzip this file at the root of your repository (same folder as `package.json`).
2. Ensure there is **no other** `middleware.ts` (either root or under `src/`). Keep only **one**.
3. Commit the changes:
   ```bash
   git add .
   git commit -m "fix: next-intl config + middleware; resolve ESLint conflict"
   git push
   ```
4. In Netlify, trigger a new deploy.

## Notes

- Locales configured: `en` (default), `pl`.
- If your app uses different locales or message keys, extend `src/messages/*.json` and keep the same file names.
- The `next.config.ts` keeps your OpenTelemetry server externals and ignores lint/type errors during builds,
  matching your current project behavior.

