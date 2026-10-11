# Image search — Advanced JS homework 3

Search Pixabay photos and open a large image with SimpleLightbox. The app uses JavaScript modules, Vite, Axios, iziToast, and a CSS loader from vineethtrv/css-loader.

## Start

Use Node.js 22 or a supported newer version.

```sh
npm ci
cp .env.example .env
npm run dev
```

Open `.env` in your editor. Set `VITE_PIXABAY_API_KEY` to your own key from https://pixabay.com/api/docs/. Do not paste your key into chat. Restart Vite after editing `.env`.

```sh
npm run format
npm run format:check
npm run build
npm run preview
```

## Files

- `src/index.html`: search form, loader, and gallery.
- `src/js/pixabay-api.js`: Axios request; returns `response.data`.
- `src/js/render-functions.js`: gallery markup, one lightbox, and loader controls.
- `src/js/main.js`: form checks, messages, and Promise chain.
- `src/css/styles.css`: responsive page styles.
- `src/css/loader.css`: CSS loader, copied from the source below.
- `vite.config.js`: Vite root, environment folder, and relative asset paths.
- `.github/workflows/deploy.yml`: manual GitHub Pages deployment.

## API key and publication

`.env` stays out of Git and the ZIP. This prevents committing the source key file. It does not hide the key in the built site. Vite puts `VITE_` values into browser code. Users can read the key in the bundle or a request.

Pixabay documents a client-side JavaScript example. Its API rules also require a 24-hour request cache, source attribution, and temporary use of returned image URLs. This app shows source attribution and caches successful responses for 24 hours. It uses localStorage, with a memory cache when storage is blocked. A blocked-storage cache lasts only until the page closes. Review your account rules before wider use.

To deploy your own copy:

1. Create the public repository `goit-advancedjs-hw-03` in the approved account.
2. Upload this project folder as the repository root.
3. Add your key as the repository Actions secret `VITE_PIXABAY_API_KEY`.
4. Set Settings > Pages > Source to GitHub Actions.
5. Run the Deploy to GitHub Pages workflow manually.
6. Check the live page, real search, and browser console.

The workflow has no push trigger. A GitHub secret protects the build setting, but the deployed client key is still visible.

## Verification

See `output/playwright/results.json`. Browser checks use controlled responses and controlled image fixtures. Screenshots show the actual local UI with those fixtures. They do not prove real Pixabay search. The real API check passed with the account owner's key. See `output/playwright/live-results.json`: flowers, cats, no matches, image loading, lightbox, and a clean console. Real screenshots have the `live-` prefix. GitHub Pages deployment passed. These real API checks also passed on the published page. The cache checks passed separately; see `output/playwright/cache-results.json`.

The required folder diagram and Figma URL were missing from the pasted task. The project follows the previous homework's `src/js` and `src/css` layout. Exact diagram and Figma matching remain unverified.

## Sources

- GoIT Vite template: https://github.com/goitacademy/vanilla-app-template
- Pixabay API and usage rules: https://pixabay.com/api/docs/
- Axios: https://axios-http.com/docs/intro
- iziToast: https://github.com/marcelodolza/iziToast
- SimpleLightbox: https://github.com/andreknieriem/simplelightbox
- Loader CSS: https://github.com/vineethtrv/css-loader/blob/master/src/loaders/bubble/bubble01.module.css
- Loader license: `LOADER-LICENSE.txt` (MIT).
- Vite variables: https://vite.dev/guide/env-and-mode.html
- Vite deployment: https://vite.dev/guide/static-deploy.html#github-pages

The GoIT template and its build setup were reviewed. This single-page project uses a small Vite config without unused multi-page plugins. The loader is vendored CSS, not the webpack `css-loader` package.

## Submission links

- Source: https://github.com/diagnosel/goit-advancedjs-hw-03
- Live page: https://diagnosel.github.io/goit-advancedjs-hw-03/
- Learning guide: https://app.notion.com/p/3f6a96dc80e581fdaa30de6de5a10555
