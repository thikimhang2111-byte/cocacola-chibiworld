Instructions to ensure GitHub Pages does not show a blank page
------------------------------------------------------------

Two robust options are provided below.

Option A - Use the included GitHub Actions (recommended):
1. Push this repo to GitHub and ensure 'main' branch exists and contains your source.
2. The workflow .github/workflows/auto-deploy.yml will automatically run on pushes to 'main'.
   It installs dependencies, runs `npm run build`, and deploys the generated `dist/` to `gh-pages`.
3. On GitHub, go to Settings -> Pages and ensure Branch: gh-pages, Folder: / (root).
   The site will be served from the built `dist/` content.

Option B - Manual build & deploy:
1. On your machine:
   npm install
   npm run build
2. Create gh-pages branch that only contains build output:
   git subtree split --prefix dist -b gh-pages-temp
   git push origin gh-pages-temp:gh-pages --force
   git branch -D gh-pages-temp
3. In GitHub Pages settings, set Branch: gh-pages, Folder: / (root).

If you still see a blank page:
 - Make sure the built `index.html` and assets are present in the gh-pages branch root.
 - Check browser console (F12) for 404s or JS errors (missing files -> 404).

Note:
 - I updated `qrcode.react` to ^3.0.0 in package.json to fix React 18 peer dependency conflicts.
 - If you prefer I can also prepare a ready-built repo (with `dist/` included at root) as a zip.