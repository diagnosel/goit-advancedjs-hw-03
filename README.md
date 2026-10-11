# Image search

Advanced JavaScript homework 3. Search Pixabay photos and open large images with SimpleLightbox.

## Links

- Live page: https://diagnosel.github.io/goit-advancedjs-hw-03/
- Repository: https://github.com/diagnosel/goit-advancedjs-hw-03

## Setup

Use Node.js 22.

```sh
npm ci
cp .env.example .env
```

Set `VITE_PIXABAY_API_KEY` in `.env` to a key from https://pixabay.com/api/docs/.

```sh
npm run dev
```

Restart the server after changing `.env`.

## Commands

```sh
npm run format
npm run format:check
npm run build
npm run preview
```

## Structure

- `src/main.js`: form handling and search flow.
- `src/js/pixabay-api.js`: API requests and a 24-hour response cache.
- `src/js/render-functions.js`: gallery, lightbox, and loader controls.
- `src/css/`: page styles and loader animation.
- `src/img/` and `assets/`: local asset folders.

## Libraries

Vite, Axios, iziToast, and SimpleLightbox.

Loader CSS: https://github.com/vineethtrv/css-loader/blob/master/src/loaders/bubble/bubble01.module.css

The loader uses the MIT license. See `LOADER-LICENSE.txt`.

## Deployment

Set the repository Actions secret `VITE_PIXABAY_API_KEY`. Choose GitHub Actions as the Pages source, then run the deployment workflow manually.

`.env` is ignored by Git. The API key is visible in the built browser app.
