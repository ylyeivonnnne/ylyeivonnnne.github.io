# ylyeivonnnne.github.io

Single-page academic personal website for `https://ylyeivonnnne.github.io`.

## Stack

- Static `HTML + CSS + JavaScript`
- No framework build step
- GitHub Pages deployment via GitHub Actions

## Content Source

This site is rebuilt from:

- `https://github.com/ylyeivonnnne/personal-site-archive`
- The archived `resume.pdf` in that repository

No personal facts should be added unless they are supported by those sources.

## Local Preview

From the repository root:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

## Validation

Run the built-in validator:

```bash
node scripts/validate-site.mjs
```

## Deployment

Push to `main` and GitHub Actions will publish the static files in this repository to GitHub Pages.
