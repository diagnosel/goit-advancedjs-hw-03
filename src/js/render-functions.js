import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-container');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function escapeHtml(value) {
  return String(value ?? '').replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  );
}

function imageUrl(value) {
  const url = new URL(value);
  if (url.protocol !== 'https:') throw new Error('Invalid image URL');
  return escapeHtml(url.href);
}

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${imageUrl(largeImageURL)}">
        <img src="${imageUrl(webformatURL)}" alt="${escapeHtml(tags)}" width="360" height="200" />
      </a>
      <dl class="image-info">
        <div><dt>Likes</dt><dd>${escapeHtml(likes)}</dd></div>
        <div><dt>Views</dt><dd>${escapeHtml(views)}</dd></div>
        <div><dt>Comments</dt><dd>${escapeHtml(comments)}</dd></div>
        <div><dt>Downloads</dt><dd>${escapeHtml(downloads)}</dd></div>
      </dl>
    </li>`,
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
  lightbox.refresh();
}
export function showLoader() {
  loader.classList.add('is-visible');
  gallery.setAttribute('aria-busy', 'true');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
  gallery.setAttribute('aria-busy', 'false');
}
