import axios from 'axios';

const cache = new Map();
const cacheLifetime = 24 * 60 * 60 * 1000;

export function getImagesByQuery(query) {
  const key = import.meta.env.VITE_PIXABAY_API_KEY;
  if (!key) return Promise.reject(new Error('Missing Pixabay API key'));
  const cacheKey = `pixabay-photo-horizontal-safe:${query}`;
  let cached = cache.get(cacheKey);
  try {
    cached ??= JSON.parse(localStorage.getItem(cacheKey));
  } catch {
    // Search still works when storage is blocked or a saved entry is invalid.
  }
  if (
    cached &&
    cached.expiresAt > Date.now() &&
    Array.isArray(cached.data?.hits)
  ) {
    return Promise.resolve(cached.data);
  }
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
      timeout: 15000,
    })
    .then((response) => {
      const entry = {
        data: response.data,
        expiresAt: Date.now() + cacheLifetime,
      };
      cache.set(cacheKey, entry);
      try {
        localStorage.setItem(cacheKey, JSON.stringify(entry));
      } catch {
        // Keep the memory cache if local storage is not available.
      }
      return response.data;
    });
}
