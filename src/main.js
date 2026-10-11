import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/styles.css';
import './css/loader.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
let latestSearch = 0;
iziToast.settings({
  position: 'bottomRight',
  timeout: 5000,
  messageSize: '16',
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = form.elements['search-text'].value.trim();
  if (!query) {
    iziToast.warning({ message: 'Please enter a search word.' });
    return;
  }
  const searchId = ++latestSearch;
  iziToast.destroy();
  clearGallery();
  showLoader();
  getImagesByQuery(query)
    .then(({ hits }) => {
      if (searchId !== latestSearch) return;
      if (hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      createGallery(hits);
    })
    .catch((error) => {
      if (searchId !== latestSearch) return;
      iziToast.error({
        message:
          error.message === 'Missing Pixabay API key'
            ? 'Add your Pixabay API key to .env, then restart Vite.'
            : 'Could not load images. Check your connection and try again.',
      });
    })
    .finally(() => {
      if (searchId === latestSearch) hideLoader();
    });
});
